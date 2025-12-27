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

app.get('/search', (req, res) => {
  const { q, page } = req.query;
  res.json({ 
    query: q, 
    page: page 
  })
})

app.post('/users', (req, res) => {
  const user = req.body;
  res.status(201).json({
    message: 'User created',
    user
    // {
    //   name: 'Alex',
    //   age: 25
    // }
  })
})

app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})