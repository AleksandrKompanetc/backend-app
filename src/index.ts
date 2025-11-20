import express, { Request, Response } from 'express';

const app = express();
const port = 3011;

const products = [{title: 'tomato'}, {title: 'orange'}];

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world! Yo!');
})

app.get('/products', (req: Request, res: Response) => {
  res.send(products);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})