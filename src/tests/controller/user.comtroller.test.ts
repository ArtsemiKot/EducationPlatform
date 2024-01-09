import request from 'supertest';
import app from '../../app';
let id;

test('get', async () => {
  const result = await request(app).get('/user');

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBeGreaterThanOrEqual(0);
});

test('getById', async () => {
  const result = await request(app).get(`/user/${id}`);

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});

test('put', async () => {
  const result = await request(app).put(`/user/${id}`).send({ name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' });

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});

test('delete', async () => {
  const result = await request(app).delete(`/user/${id}`);
  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBe(1);
});