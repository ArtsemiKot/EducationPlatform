import request from 'supertest';
import app from '../../app';
let id;

test('post', async () => {
  const res = await request(app).post('/course').send({ course: 'ts' });

  id = res.body[0].id;
  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
  expect(res.body).toBeTruthy();
});

test('get', async () => {
  const res = await request(app).get('/course');

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBeGreaterThanOrEqual(0);
});

test('getById', async () => {
  const res = await request(app).get(`/course/${id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body).toBeTruthy();
  expect(res.body.length).toBe(1);
});

test('put', async () => {
  const res = await request(app).put(`/course/${id}`).send({ course: 'ts' });

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
  expect(res.body).toBeTruthy();
});

test('delete', async () => {
  const res = await request(app).delete(`/course/${id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.length).toBe(1);
  expect(res.body).toBeTruthy();
});