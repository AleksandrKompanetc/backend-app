import request from 'supertest'
import { app } from '../../src/index'

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
    await request(app)
      .post('/courses')
      .send({title: ''})
      .expect(400)
  })
})