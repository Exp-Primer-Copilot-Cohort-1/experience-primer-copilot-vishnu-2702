// Create web server
// Run: node comments.js
// Test: curl -X POST -d "comment=Hello" http://localhost:3000/comments
// Test: curl http://localhost:3000/comments
// Test: curl -X DELETE http://localhost:3000/comments/0

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use body parser to parse JSON body
app.use(bodyParser.json());

// Array to store comments
const comments = [];

// Return all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json(comment);
});

// Delete a comment
app.delete('/comments/:index', (req, res) => {
  const index = req.params.index;
  const comment = comments.splice(index, 1);
  res.json(comment);
});

// Start server
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000/');
});