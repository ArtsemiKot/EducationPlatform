import pool from '../db';
import { iCourse } from '../interfaces/interfaces';

async function getAllCourseDB(): Promise<iCourse[]> {
  const client = await pool.connect();
  const sql = 'select * from courses';
  const data = (await client.query(sql)).rows;
  return data;
}

export { getAllCourseDB };