import pool from '../db';
import { iUsers } from '../interfaces/interfaces';

async function getUserByEmailDB(email: string): Promise<iUsers[]> {
  const client = await pool.connect();
  const sql_select = 'select * from users where email = $1';

  return (await client.query(sql_select, [email])).rows;
}

async function regestrationUserDB(name: string, surname: string, email: string, hashPWD: string): Promise<iUsers[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql_create = `insert into users (name, surname, email, pwd) values
            ($1, $2, $3, $4) returning *`;
    const result = (await client.query(sql_create, [name, surname, email, hashPWD])).rows;
    await client.query('COMMIT');
    return result;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`regestrationUser: ${error.message}`);
    return [];
  }
}

export { getUserByEmailDB, regestrationUserDB };
