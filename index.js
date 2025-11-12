const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  const time = new Date().toLocaleTimeString();
  res.send(`Сервер обновлён в: ${time}`);
  // res.send('I want to become a backend developer!');
  // console.log('✅ Сервер запущен!');
})

app.listen(port, () => {
  console.log(`Example app: http://localhost:${port }`);
})