const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello Node JS + Express');
})

app.get('/about', (req, res) => {
  res.send('About page');
})

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID requested: ${userId}`);
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})