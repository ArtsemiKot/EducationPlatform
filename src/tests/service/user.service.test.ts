import { getAllUsers, getUserByID, updateUserByID, deleteUserByID } from '../../service/user.service';
import * as repository from '../../repository/user.repository';
import ExceptionType from '../../exception/exception';
import { describe } from 'node:test';

describe('test getAllUsers function', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'getAllUsersDB');
    repFunction.mockResolvedValue([
      { id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' },
      { id: 2, name: 'Chris', surname: 'Kot', email: 'c.kot@mail.ru', pwd: '87654321' },
    ]);
    const result = await getAllUsers();
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(2);
    expect(result[0].id).toBe(1);
    expect(result[1].id).toBe(2);
    expect(result[0].name).toBe('Artsemi');
    expect(result[0].surname).toBe('Kot');
    expect(result).toEqual([
        { id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' },
        { id: 2, name: 'Chris', surname: 'Kot', email: 'c.kot@mail.ru', pwd: '87654321' },
    ]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'getAllUsersDB');
    repFunction.mockResolvedValue([]);
    try {
      await getAllUsers();
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_GET_USERS_NOT_FOUND);
    }
  });
});

describe('test getUserById function', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'getUserBYIDDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    const result = await getUserByID(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'getUserBYIDDB');
    repFunction.mockResolvedValue([]);
    try {
      await getUserByID(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_GET_USERS_BY_ID_NOT_FOUND);
    }
  });
});

describe('test updateUser', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'updateUserByIDDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    const result = await updateUserByID(1, 'Artsemi', 'Kot', 'a.kot@mail.ru', '12345678');
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Artsemi');
    expect(result[0].surname).toBe('Kot');
    expect(result[0].email).toBe('a.kot@mail.ru');
    expect(result[0].pwd).toBe('12345678');
    expect(result.length).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'updateUserByIDDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    try {
      await updateUserByID(1, 'Artsemi', 'Kot', 'a.kot@mail.ru', '12345678');
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_PUT_USERS_NOT_UPDATE);
    }
  });
});

describe('test deleteUser function', () => {
  test('success', async () => {
    const repFunction = jest.spyOn(repository, 'deleteUserByIDDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    const result = await deleteUserByID(1);
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].email).toBe('a.kot@mail.ru');
    expect(result).toEqual([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
  });

  test('error', async () => {
    const repFunction = jest.spyOn(repository, 'deleteUserByIDDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    try {
      await deleteUserByID(1);
    } catch (error: any) {
      expect(error.message).toBe(ExceptionType.DB_DELETE_USER_NOT_DELETE);
    }
  });
});