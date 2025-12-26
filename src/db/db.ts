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