import pool from '../db';
import { iLessons } from '../interfaces/interfaces';

async function getAllLessonsDB(): Promise<iLessons[]> {
    const client = await pool.connect();
    const sql = 'select * from lessons';
    const data = (await client.query(sql)).rows;
    return data;
}

async function getLessonByIdDB(course_id: number): Promise<iLessons[]> {
    const client = await pool.connect();
    const sql = `select * from lessons where course_id =$1`;
    const data = (await client.query(sql, [course_id])).rows;

    return data;
}

async function createLessonDB(title: string, course_id: number): Promise<iLessons[]> {
    const client = await pool.connect();
    const sql = `insert into lessons(title, course_id) values($1, $2) returning *`;
    const data = (await client.query(sql, [title, course_id])).rows;
    return data;
}

async function updateLessonDB(id: number, title: string, course_id: number): Promise<iLessons[]> {
    const client = await pool.connect();
    const sql = `update lessons set title = $1, course_id =$2 where id = $3 returning *`;
    const data = (await client.query(sql, [title, course_id, id])).rows;

    return data;
}

async function deleteLessonDB(id: number): Promise<iLessons[]> {
    const client = await pool.connect();
    const sql = 'delete from lessons where id =$1 returning *';
    const data = (await client.query(sql, [id])).rows

    return data
}
export { getAllLessonsDB, getLessonByIdDB, createLessonDB, updateLessonDB, deleteLessonDB };