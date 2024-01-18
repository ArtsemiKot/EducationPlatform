import { regestrationUser, authorizationUser } from '../../service/api.service';
import * as repository from '../../repository/api.repository';
import bcrypt from 'bcrypt';

describe('test registrationUser function', () => {
  test('test succees', async () => {
    const mockHash = jest.spyOn(bcrypt, 'hash');
    mockHash.mockResolvedValue('fg45fg');
    const repFunction = jest.spyOn(repository, 'regestrationUserDB');
    repFunction.mockResolvedValue([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    const result = await regestrationUser('Artsemi', 'Kot', 'an.kot@mail.ru', '12345678');
    expect(repFunction).toHaveBeenCalled();
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Artsemi');
    expect(result[0].id).toBe(1);
    expect(result).toEqual([{ id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    expect(mockHash).toHaveBeenCalled()
  });

  test('error getUserByEmailDB from registrationUser', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction.mockResolvedValue([ { id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    try {
      await regestrationUser('Artsemi', 'Kot', 'a.kot@mail.ru', '12345678');
    } catch (error: any) {
      expect(error.message).toBe('User already exist');
    }
  });

  test('error', async () => {
    const repFunction2 = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction2.mockResolvedValue([]);
    const repFunction = jest.spyOn(repository, 'regestrationUserDB');
    repFunction.mockResolvedValue([]);
    try {
      await regestrationUser('Artsemi', 'Kot', 'a.kot@mail.ru', '12345678');
    } catch (error: any) {
      expect(error.message).toBe('User not created');
    }
  });
});

describe('test authUser function', () => {
  test('success', async () => {
    const repFunction2 = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction2.mockResolvedValue([ { id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    const repFunction = jest.spyOn(bcrypt, 'compare');
    repFunction.mockResolvedValue(true);
    const result = await authorizationUser('a.kot@mail.ru', '12345678');
    expect(repFunction).toHaveBeenCalled();
    expect(result[0].id).toBe(1);
    expect(result.length).toBe(1);
    expect(result).toEqual([ { id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
  });

  test('error getUserByEmail from authUser', async () => {
    const repFunction = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction.mockResolvedValue([]);
    try {
      await authorizationUser('a.kot@mail.ru', '12345678');
    } catch (error: any) {
      expect(error.message).toBe('User is not found');
    }
  });

  test('error pwd fron authUser function', async () => {
    const repFunction2 = jest.spyOn(repository, 'getUserByEmailDB');
    repFunction2.mockResolvedValue([ { id: 1, name: 'Artsemi', surname: 'Kot', email: 'a.kot@mail.ru', pwd: '12345678' }]);
    const repFunction = jest.spyOn(bcrypt, 'compare');
    repFunction.mockResolvedValue(false);
    try {
      await authorizationUser('a.kot@mail.ru', '12345678');
    } catch (error: any) {
      expect(error.message).toBe('Password does no match');
    }
  });
});