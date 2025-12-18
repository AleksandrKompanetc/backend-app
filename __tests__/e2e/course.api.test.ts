import request from 'supertest'
import { app } from '../../src/index'
import { CreateCourseModel } from '../../src/models/CreateCourseModel'
import e = require('express')

describe('/course', () => {
  beforeAll(async () => {
    await request(app).delete('/__test__/data')
  })

  it('should return 200 and empty array', async () => {
    await request(app)
      .get('/courses')
      .expect(200, [])
  })

  it('should return 404 for not existing course', async () => {
    await request(app)
      .get('/courses/9999')
      .expect(404)
  })

  it(`shouldn't create course with incorrect input data`, async () => {
    const data: CreateCourseModel = {title: ''}
    const createResponse = await request(app)
      .post('/courses')
      .send(data)
      .expect(400)

    const createdCourse = createResponse.body

    expect(createdCourse).toEqual({
      id: expect.any(Number),
      title: 'It-incubator course'
    })

    await request(app)
      .get('/courses')
      .expect(200, [createdCourse])
  })

  it('create one more course', async () => {
    const data: CreateCourseModel = {title: 'It-incubator course 2'}

    const createResponse = await request(app)
      .post('/courses')
      .send(data)
      .expect(201)

    const createdCourse = createResponse.body

    expect(createdCourse).toEqual({
      id: expect.any(Number)
      title: data.title
    })  

    await request(app)
      .get('/courses')
      .expect(200, [createdCourse])
  })

  it(`shouldn't update course with incorrect input data`, async () => {
    const data: CreateCourseModel = {title: ''}

    await request(app)
      .put('/courses/' + createdCourse.id)
      .send(data)
      .expect(400)
  
    await request(app)
      .get('/courses/' + createdCourse.id)
      .expect(200, createdCourse1)
  })
})