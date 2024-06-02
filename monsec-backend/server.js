const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 5001; // Changed port to 5001

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to SQLite database
const db = new sqlite3.Database('./monsec.db', (err) => {
  if (err) {
    console.error('Could not connect to database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create tables
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    ctf_ranking INTEGER
  )`);
});

// Routes
app.post('/register', (req, res) => {
  const { name, email, password, ctf_ranking } = req.body;
  db.run('INSERT INTO users (name, email, password, ctf_ranking) VALUES (?, ?, ?, ?)', [name, email, password, ctf_ranking], function(err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    if (!row) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    res.json(row);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
