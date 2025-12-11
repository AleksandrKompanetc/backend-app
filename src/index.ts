const express, { Request, Response } from 'express'

export const app = express()
const port = 3000

const jsonBodyMiddleware = express.json()
app.use(jsonBodyMiddleware)

type CourseType = {
  id: number
  title: string
}

const db: { courses: CourseType[]} = {
  courses: [
    {id: 1, title: 'front-end'},
    {id: 2, title: 'back-end'},
    {id: 3, title: 'automation qa'},
    {id: 4, title: 'devops'}
  ]
}

app.get('/courses', (req: Request<{}, {}, {}, {title: string}>, res: Response<CourseType[]>) => {
  let foundCourses = db.courses

  if (req.query.title) {
    foundCourses = foundCourses.filter(c => c.title.indexOf(req.query.title as string) > -1)
  }

  res.json(foundCourses)
})

app.get('/courses/:id', (req: Request<{id: string}>, res) => {
  const foundCourse = db.courses.find(c => c.id === +req.params.id)

  if (!foundCourse) {
    res.sendStatus(404)
    return
  }

  res.json(foundCourse)
})

app.post('/courses', (req: Request<{}, {}, {title: string}>, res: Response<CourseType>) => {
  if (!req.body.title) {
    res.sendStatus(400)
    return
  }

  const createdCourse = {
    id: +(new Date()),
    title: req.body.title
  }
  db.courses.push(createdCourse)

  res
    .status(201)
    .json(createdCourse)
})

app.delete('/courses/:id', (req: Request<{id: string}>, res) => {
  db.courses = db.courses.filter(c => c.id !== +req.params.id)
  res.sendStatus(204)
})

app.put('/courses/:id', (req: Request<{id: string}, {}, {title: string}>, res) => {
  if (!req.body.title) {
    res.sendStatus(400)
    return
  }

  const foundCourse = db.courses.find(c => c.id === +req.params.id)
  if (!foundCourse) {
    res.sendStatus(404)
    return
  } 

  foundCourse.title = req.body.title
  res.sendStatus(204)
})

app.delete('/__test__/data', (req, res) => {

})

export const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';

// export const app = express();
// const port = process.env.PORT || 5000;

// const products = [{id: 1, title: 'tomato'}, {id: 2, title: 'orange'}];
// const addresses = [{id: 1, value: 'Molodizhna'}, {id: 2, value: 'Malyshka'}];

// const parserMiddleware = bodyParser.json();
// app.use(parserMiddleware);

// const db = {
//   courses: [
//     {id: 1, title: 'front-end'},
//     {id: 2, title: 'back-end'},
//     {id: 3, title: 'automation qa'},
//     {id: 4, title: 'devops'}
//   ]
// }

// app.get('/courses', (req: Request, res: Response) => {
//   let foundCourses = db.courses;
// })

// app.get('/products', (req: Request, res: Response) => {
//   if (req.query.title) {
//     res.send(products.filter(p => p.title.indexOf(req.query.title as string) > -1));
//   } else {
//     res.send(products);
//   }
// })

// app.get('/products', (req: Request, res: Response) => {
//   if (req.query.title) {
//     res.send(products.filter(p => p.title.indexOf(req.query.title as string) > -1));
//   } else {
//     res.send(products);
//   }
// })

// app.get('/products/:id', (req: Request, res: Response) => {
//   const newProduct = {
//     id: +(new Date()),
//     title: res.body.title
//   }
//   products.push(newProduct);
//   res.status(201).send(newProduct);
// })


// app.delete('/products/:id', (req: Request, res: Response) => {
//   for ( let i = 0; i < products.length; i++) {
//     if (products[i].id === +req.params.id) {
//       products.splice(i, 1);
//       res.send(204);
//       return;
//     }
//   }
//   res.send(404);
// })

// app.get('/products/:productTitle', (req: Request, res: Response) => {
//   let product = products.find(p => p.title === req.params.productTitle);
//   if (product) {
//     res.send(product);
//   } else {
//     res.send(404);
//   }
// })

// app.put('/products/:id', (req: Request, res: Response) => {
//   let product = products.find(p => p.id === +req.params.id);
//   if (product) {
//     product.title = req.body.title;
//     res.send(product);
//   }
// })

// app.get('/addresses/:id', (req: Request, res: Response) => {
//   let address = addresses.find(a => a.id === +req.params.id);
//   if (address) {
//     res.send(address);
//   } else {
//     res.send(404);
//   }
//   res.send(addresses);
// })

// app.delete('/__test__/data', (req, res) => {
//   db.courses = [];
//   res.sendStatus(204);
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// })