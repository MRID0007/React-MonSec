const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User, EventSignup, Event, Challenge } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// User Signup Route
app.post('/signup', async (req, res) => {
  const { username, email, password, avatar } = req.body;

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword, avatar, ctfScore: 0 });
    const token = jwt.sign({ id: newUser.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', user: newUser, token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// User Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token, user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get current user details
app.get('/users/me', async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// User Update Route
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { username, email, password, avatar } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    user.username = username || user.username;
    user.email = email || user.email;
    user.avatar = avatar || user.avatar;

    await user.save();

    res.json({ user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Event Signup Route
app.post('/events/:eventId/signup', async (req, res) => {
  const { userId } = req.body;
  const { eventId } = req.params;

  try {
    const existingSignup = await EventSignup.findOne({ where: { userId, eventId } });
    if (existingSignup) {
      return res.status(400).json({ message: 'User is already signed up for this event' });
    }

    const eventSignup = await EventSignup.create({ userId, eventId });
    res.status(201).json({ message: 'Event signup successful', eventSignup });
  } catch (error) {
    console.error('Error signing up for event:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get User's Past and Future Events
app.get('/users/:id/events', async (req, res) => {
  const { id } = req.params;
  const now = new Date();

  try {
    const pastEvents = await EventSignup.findAll({
      where: { userId: id },
      include: [{ model: Event, as: 'Event', where: { date: { [Op.lt]: now } } }]
    });

    const futureEvents = await EventSignup.findAll({
      where: { userId: id },
      include: [{ model: Event, as: 'Event', where: { date: { [Op.gt]: now } } }]
    });

    res.json({
      pastEvents: pastEvents.map(signup => ({ ...signup.toJSON(), event: signup.Event.toJSON() })),
      futureEvents: futureEvents.map(signup => ({ ...signup.toJSON(), event: signup.Event.toJSON() }))
    });
  } catch (error) {
    console.error('Error fetching user events:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Event Leave Route
app.delete('/events/:eventId/leave', async (req, res) => {
  const { userId } = req.body;
  const { eventId } = req.params;

  try {
    const eventSignup = await EventSignup.findOne({ where: { userId, eventId } });
    if (eventSignup) {
      await eventSignup.destroy();
      res.json({ message: 'Successfully left the event' });
    } else {
      res.status(404).json({ message: 'Event signup not found' });
    }
  } catch (error) {
    console.error('Error leaving event:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Challenges Routes
app.get('/challenges', async (req, res) => {
  try {
    const challenges = await Challenge.findAll();
    res.json(challenges);
  } catch (error) {
    console.error('Error fetching challenges:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/challenges', async (req, res) => {
  const { name, category, points, description, flag, solves, likes, completed, bookmarked, filePaths, hints } = req.body;

  try {
    const challenge = await Challenge.create({ name, category, points, description, flag, solves, likes, completed, bookmarked, filePaths, hints });
    res.status(201).json(challenge);
  } catch (error) {
    console.error('Error creating challenge:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/challenges/:id', async (req, res) => {
  const { id } = req.params;
  const { name, category, points, description, flag, solves, likes, completed, bookmarked, filePaths, hints } = req.body;

  try {
    const challenge = await Challenge.findByPk(id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }

    challenge.name = name || challenge.name;
    challenge.category = category || challenge.category;
    challenge.points = points || challenge.points;
    challenge.description = description || challenge.description;
    challenge.flag = flag || challenge.flag;
    challenge.solves = solves || challenge.solves;
    challenge.likes = likes || challenge.likes;
    challenge.completed = completed !== undefined ? completed : challenge.completed;
    challenge.bookmarked = bookmarked !== undefined ? bookmarked : challenge.bookmarked;
    challenge.filePaths = filePaths || challenge.filePaths;
    challenge.hints = hints || challenge.hints;

    await challenge.save();

    res.json(challenge);
  } catch (error) {
    console.error('Error updating challenge:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/challenges/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const challenge = await Challenge.findByPk(id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }

    await challenge.destroy();
    res.json({ message: 'Challenge deleted successfully' });
  } catch (error) {
    console.error('Error deleting challenge:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to verify the submitted flag
app.post('/challenges/:id/submit-flag', async (req, res) => {
  const { id } = req.params;
  const { flag, userId } = req.body;

  try {
    const challenge = await Challenge.findByPk(id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }

    if (challenge.flag === flag) {
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.ctfScore = (user.ctfScore || 0) + challenge.points;
      await user.save();

      return res.status(200).json({ message: 'Correct flag!', newScore: user.ctfScore });
    } else {
      return res.status(400).json({ message: 'Incorrect flag' });
    }
  } catch (error) {
    console.error('Error submitting flag:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Endpoint to download files related to a challenge
app.get('/challenges/:id/download', async (req, res) => {
  const { id } = req.params;

  try {
    const challenge = await Challenge.findByPk(id);
    if (!challenge) {
      return res.status(404).json({ message: 'Challenge not found' });
    }

    const filePath = challenge.filePaths;
    if (!filePath) {
      return res.status(404).json({ message: 'No files available for download' });
    }

    const fullPath = path.resolve(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      res.download(fullPath);
    } else {
      console.error(`File not found: ${fullPath}`);
      res.status(404).json({ message: 'File not found' });
    }
  } catch (error) {
    console.error('Error downloading files:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app; // Export the app for testing or further usage
