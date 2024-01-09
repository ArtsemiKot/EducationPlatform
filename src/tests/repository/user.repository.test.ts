import { getAllUsersDB, getUserBYIDDB, updateUserByIDDB, deleteUserByIDDB } from '../../repository/user.repository';

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

describe('test getAllUserDB function', () => {
  test('function return success', async () => {
    client.query.mockResolvedValue({
      rows: [{id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'}],
    });
    const result = await getAllUsersDB();

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Artsemi');
    expect(result[0].surname).toBe('Kot');
    expect(result[0].email).toBe('a.kot@mail.ru');
    expect(result[0].pwd).toBe('12345678');
    expect(result).toHaveLength(1);
    expect(result).toEqual([
        {id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'},
    ]);
  });
});

describe('test getUserByIdDB function', () => {
  test('function return success', async () => {
    client.query.mockResolvedValue({
      rows: [
        {id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'},
      ],
    });
    const result = await getUserBYIDDB(1);

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Artsemi');
    expect(result[0].surname).toBe('Kot');
    expect(result[0].email).toBe('a.kot@mail.ru');
    expect(result[0].pwd).toBe('12345678');
    expect(result).toHaveLength(1);
    expect(result).toEqual([
        {id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'},
    ]);
  });
});

describe('test updateUserByIDDB function', () => {
  test('function return success', async () => {
    client.query.mockResolvedValue({
      rows: [
        {id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'},
      ],
    });
    const result = await updateUserByIDDB(1, 'Artsemi', 'Kot', 'a.kot@mail.ru', '12345678');

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Artsemi');
    expect(result[0].surname).toBe('Kot');
    expect(result[0].email).toBe('a.kot@mail.ru');
    expect(result[0].pwd).toBe('12345678');
    expect(result).toHaveLength(1);
    expect(result).toEqual([
        {id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'},
    ]);
  });
});

describe('test deleteUserByIDDB function', () => {
  test('function return success', async () => {
    client.query.mockResolvedValue({
      rows: [
        {id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'},
      ],
    });
    const result = await deleteUserByIDDB(2);

    expect(client.query).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Artsemi');
    expect(result[0].surname).toBe('Kot');
    expect(result[0].email).toBe('a.kot@mail.ru');
    expect(result[0].pwd).toBe('12345678');
    expect(result).toHaveLength(1);
    expect(result).toEqual([
        {id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678'},
    ]);
  });
});