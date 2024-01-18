import bcrypt from 'bcrypt';
import { getUserByEmailDB, regestrationUserDB } from '../repository/api.repository';
import { iUsers } from '../interfaces/interfaces';

async function regestrationUser(name: string, surname: string, email: string, pwd: string): Promise<iUsers[]> {
  const foundUser = await getUserByEmailDB(email);
  if (foundUser.length) throw new Error('User already exist');
  const salt = 10;
  const hashPWD = await bcrypt.hash(pwd, salt);
  const data = await regestrationUserDB(name, surname, email, hashPWD);
  if (!data.length) throw new Error('User not created');
  return data;
}

async function authorizationUser(email, pwd): Promise<iUsers[]> {
  const user = await getUserByEmailDB(email);
  if (!user.length) throw new Error('User is not found');

  const pwdUserHash = user[0].pwd;

  if (!(await bcrypt.compare(pwd, pwdUserHash))) throw new Error('Password does no match');
  return user;
}

export { regestrationUser, authorizationUser };
