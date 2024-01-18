import { getUserByEmailDB, regestrationUserDB } from '../../repository/api.repository';

const client = {
  query: jest.fn(),
};

jest.mock('pg', () => {
  const pool = { connect: jest.fn(() => client) };
  return { Pool: jest.fn(() => pool) };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('test getUserByEmail', () => {
  test('return success', async () => {
    client.query.mockResolvedValue({ rows: [{id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'}] });
    const result = await getUserByEmailDB('a.kot@mail.ru');

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Artsemi');
    expect(result[0].surname).toBe('Kot');
    expect(result[0].email).toBe('a.kot@mail.ru');
    expect(result[0].pwd).toBe('12345678');
    expect(result).toHaveLength(1);
    expect(result).toEqual([{id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'}]);
  });
});

describe('test registrationUserDB', () => {
    test('return success', async () => {
      client.query.mockResolvedValue({ rows: [{id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'}] });
      const result = await regestrationUserDB('Artsemi','Kot','a.kot@mail.ru','dasdqwq122');
  
      expect(client.query).toHaveBeenCalled();
      expect(result[0].id).toBe(1);
      expect(result[0].name).toBe('Artsemi');
      expect(result[0].surname).toBe('Kot');
      expect(result[0].email).toBe('a.kot@mail.ru');
      expect(result[0].pwd).toBe('12345678');
      expect(result).toHaveLength(1);
      expect(result).toEqual([{id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'}]);
    });
  });