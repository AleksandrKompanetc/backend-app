import express from 'express'

export const app = express()

export const HTTP_STATUSES = {
  OK_200: 200,
  CREATED_201: 201,
  NO_CONTENT_204: 204,
  BAD_REQUEST_400: 400,
  NOT_FOUND_404: 404,
}

export const jsonBodyMiddleware = express.json()
export type CourseType = {
  id: number
  title: string
  studentsCount: number
}

export const db: { courses: CourseType[] } = {
  courses: [
    { id: 1, title: 'front-end', studentsCount: 100 },
    { id: 2, title: 'back-end', studentsCount: 200 },
    { id: 3, title: 'automation qa', studentsCount: 150 },
    { id: 4, title: 'devops', studentsCount: 50 }
  ]
}

export const getCourseViewModel = (dbCourse: CourseType) => {
  return {
    id: dbCourse.id,
    title: dbCourse.title
  }
}

app.use(jsonBodyMiddleware)

app.get('/courses', (req: Request, res: Response)) => {
  let foundCourses = db.courses

  if (req.query.title) {
    foundCourses = foundCourses.filter(c => c.title.indexOf(req.query.title) > -1)
  }

  res.json(foundCourses.map(getCourseViewModel))
}

app.get('/courses/:id', (req: Request, res: Response) => {
  const foundCourse = db.courses.find(c => c.id === +req.params.id)

  if (!foundCourse) {
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
    return
  }

  res.json(getCourseViewModel(foundCourse))
})

app.post('/courses', (req, res) => {
  if (!req.body.title) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400)
    return
  }

  const createdCourse: CourseType = {
    id: +(new Date()),
    title: req.body.title,
    studentsCount: 0
  }

  db.courses.push(createdCourse)

  res
    .status(HTTP_STATUSES.CREATED_201)
    .json(getCourseViewModel(createdCourse))
})

app.delete('/courses/:id', (req, res) => {
  db.courses = db.courses.filter(c => c.id !== +req.params.id)
  res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
})

app.put('/courses/:id', (req, res) => {
  if (!req.body.title) {
    res.sendStatus(HTTP_STATUSES.BAD_REQUEST_400)
    return
  }
  const foundCourse = db.courses.find(c => c.id === +req.params.id)

  if (!foundCourse) {
    res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)
    return
  }

  foundCourse.title = req.body.title
  res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
})

app.delete('/__test__/data', (req, res) => {
  db.courses = []
  res.sendStatus(HTTP_STATUSES.NO_CONTENT_204)
})