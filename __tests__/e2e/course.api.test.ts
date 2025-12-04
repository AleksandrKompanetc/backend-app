import request from 'supertest';

describe('/course', () => {
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
})