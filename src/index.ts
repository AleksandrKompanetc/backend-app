import express from 'express';

const app = express();
const port = 3011;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world! Yo!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})