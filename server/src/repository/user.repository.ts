import pool from '../db';
import { iUsers } from '../interfaces/interfaces';

async function getAllUsersDB(): Promise<iUsers[]> {
  const client = await pool.connect();
  const sql = 'select * from users';
  const data = (await client.query(sql)).rows;
  return data;
}
async function getUserBYIDDB(id: number): Promise<iUsers[]> {
  const client = await pool.connect();
  const sql = 'select * from users where id =$1';
  const data = (await client.query(sql, [id])).rows;
  return data;
}

async function updateUserByIDDB(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUsers[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'update users set name=$1, surname = $2, email= $3, pwd = $4 where id = $5 returning *';
    const data = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`updateUserByIDDB:${error.message}`);
    return [];
  }
}

async function deleteUserByIDDB(id: number): Promise<iUsers[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = 'delete from users where id = $1 returning*';
    const data = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`deleteUserByIDDB:${error.message}`);
    return [];
  }
}
export { getAllUsersDB, getUserBYIDDB, updateUserByIDDB, deleteUserByIDDB };
