require('dotenv').config();  // Loading .env file
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();  // Define app before using it
app.use(cors());  // Enable CORS
app.use(express.json());  // Middleware for parsing JSON bodies

// Creating a MySQL pool connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

const port = process.env.PORT || 3001;

// Test route to check if the server is running
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// Endpoint to get all topics
app.get('/api/topics', (req, res) => {
  pool.query('SELECT * FROM `Topics`', (err, results) => {
    if (err) {
      console.error('Error fetching topics:', err);
      res.status(500).send('Failed to retrieve topics');
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

// Endpoint to get quizzes for a specific topic
app.get('/api/quizzes/:topicId', (req, res) => {
  const { topicId } = req.params;
  pool.query('SELECT * FROM `Quizzes` WHERE topic_id = ?', [topicId], (err, results) => {
    if (err) {
      console.error('Error fetching quizzes:', err);
      res.status(500).send('Failed to retrieve quizzes');
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.use(express.static('public'));
