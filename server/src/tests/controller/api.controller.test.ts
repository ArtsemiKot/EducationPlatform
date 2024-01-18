import request from 'supertest';
import app from '../../app';

test('function registrationUser', async () => {
  let result = await request(app).post('/api/reg/').send({ name: 'Artsemi', surname: 'Kot', email: 'kotkotkot@mail.ru', pwd: '12345678' });

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBeGreaterThan(0);
});

test('function authorizationUser', async () => {
  const result = await request(app).post('/api/auth/').send({ email: 'kotkotkot@mail.ru', pwd: '12345678' });

  expect(result.statusCode).toBe(200);
  expect(result.body.length).toBeGreaterThan(0);
});