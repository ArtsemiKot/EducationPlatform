import { getAllUsersDB, getUserBYIDDB, updateUserByIDDB, deleteUserByIDDB } from '../repository/user.repository';
import { iUsers } from '../interfaces/interfaces';
import ExceptionType from '../exception/exception';

async function getAllUsers(): Promise<iUsers[]> {
  const data = await getAllUsersDB();
  if (!data.length) throw new Error(ExceptionType.DB_GET_USERS_NOT_FOUND);
  return data;
}

async function getUserByID(id): Promise<iUsers[]> {
  const data = await getUserBYIDDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_GET_USERS_BY_ID_NOT_FOUND);
  return data;
}

async function updateUserByID(id, name, surname, email, pwd): Promise<iUsers[]> {
  const data = await updateUserByIDDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error(ExceptionType.DB_PUT_USERS_NOT_UPDATE);
  return data;
}

async function deleteUserByID(id: number): Promise<iUsers[]> {
  const data = await deleteUserByIDDB(id);
  if (!data.length) throw new Error(ExceptionType.DB_DELETE_USER_NOT_DELETE);
  return data;
}
export { getAllUsers, getUserByID, updateUserByID, deleteUserByID };
