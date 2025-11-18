const express = require('express');
const app = express();
const port = 3009;

app.get('/', (req, res) => {
  res.send('Hello world! This is version 3.');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})