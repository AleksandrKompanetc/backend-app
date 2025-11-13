const express = require('express');
const app = express();
const port = 3008;

app.get('/', (req, res) => {
  res.send('Hello');
})

app.listen(port, () => {
  console.log(`Example app: http://localhost:${port }`);
})