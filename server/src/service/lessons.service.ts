import { iLessons } from '../interfaces/interfaces';
import { getAllLessonsDB, getLessonByIdDB, createLessonDB, updateLessonDB, deleteLessonDB } from '../repository/lessons.repository'

async function getAllLessons(): Promise<iLessons[]> {
  const data = await getAllLessonsDB();
  if (!data.length) throw new Error('no data');

  return data;
}

async function getLessonById(course_id: number): Promise<iLessons[]> {
  const data = await getLessonByIdDB(course_id);
  if (!data.length) throw new Error('no data');

  return data;
}

async function createLesson(title: string, course_id: number): Promise<iLessons[]> {
  const data = await createLessonDB(title, course_id);
  if (!data.length) throw new Error('no create data');

  return data;
}
async function updateLesson(id: number, title: string, course_id: number): Promise<iLessons[]> {
  const data = await updateLessonDB(id, title, course_id);
  if (!data.length) throw new Error('no update data');

  return data;
}

async function deleteLesson(id: number): Promise<iLessons[]> {
  const data = await deleteLessonDB(id);

  if (!data.length) throw new Error('not delete lesson');

  return data;
}
export { getAllLessons, getLessonById, createLesson, updateLesson, deleteLesson };