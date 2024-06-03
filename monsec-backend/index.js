const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { User, EventSignup, Event } = require('./models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');

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
    const newUser = await User.create({ username, email, password: hashedPassword, avatar });
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

// Event Cancel Route
app.delete('/events/:eventId/cancel', async (req, res) => {
  const { userId } = req.body;
  const { eventId } = req.params;

  try {
    const eventSignup = await EventSignup.findOne({ where: { userId, eventId } });
    if (!eventSignup) {
      return res.status(404).json({ message: 'Event signup not found' });
    }

    await eventSignup.destroy();
    res.status(200).json({ message: 'Event signup canceled' });
  } catch (error) {
    console.error('Error canceling event signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
