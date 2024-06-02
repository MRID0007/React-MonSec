const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const { username, email, password, ctfRanking } = req.body;
    const newUser = await User.create({ username, email, password, ctfRanking });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user.' });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the users.' });
  }
});

module.exports = router;
