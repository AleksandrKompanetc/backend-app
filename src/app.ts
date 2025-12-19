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
  if (!)
})