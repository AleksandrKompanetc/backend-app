const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
  res.send('Hello world!!!!!Now');
})

app.listen(port, () => {
  console.log(`Example app: http://localhost:${port }`);
})