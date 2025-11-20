import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;

const products = [{title: 'tomato'}, {title: 'orange'}];
const addresses = [{value: 'Molodizhna'}, {value: 'Malyshka'}];

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world! Yo!');
})

app.get('/products', (req: Request, res: Response) => {
  res.send(products);
})

app.get('/products/tomato', (req: Request, res: Response) => {
  let tomato = products.find(p => p.title === 'tomato');
  res.send(tomato);
})

app.get('/addresses', (req: Request, res: Response) => {
  res.send(addresses);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})