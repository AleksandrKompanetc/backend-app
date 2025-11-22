import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 5000;

const products = [{title: 'tomato'}, {title: 'orange'}];
const addresses = [{id: 1, value: 'Molodizhna'}, {id: 2, value: 'Malyshka'}];

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello world! Yo!');
})

app.get('/products', (req: Request, res: Response) => {
  res.send(products);
})

app.get('/products/:productTitle', (req: Request, res: Response) => {
  let product = products.find(p => p.title === req.params.productTitle);
  if (product) {
    res.send(product);
  } else {
    res.send(404);
  }
  
})

app.get('/addresses/:id', (req: Request, res: Response) => {
  let address = addresses.find(a => a.id === +req.params.id);
  if (address) {
    res.send(address);
  } else {
    res.send(404);
  }
  res.send(addresses);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})