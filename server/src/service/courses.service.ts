import { iCourse } from '../interfaces/interfaces';
import { getAllCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseDB } from '../repository/courses.repository'

async function getAllCourse(): Promise<iCourse[]> {
  const data = await getAllCourseDB();
  if (!data.length) throw new Error('no data');
  return data;
}

async function getCourseById(id: number): Promise<iCourse[]> {
  const data = await getCourseByIdDB(id);
  if (!data.length) throw new Error('no data');

  return data;
}

async function createCourse(course: string, description: string): Promise<iCourse[]> {
  const data = await createCourseDB(course, description);
  if (!data.length) throw new Error('no data');

  return data;
}

async function updateCourse(id: number, course: string, description: string): Promise<iCourse[]> {
  const data = await updateCourseDB(id, course, description);
  if (!data.length) throw new Error('no data');

  return data;
}

async function deleteCourse(id: number): Promise<iCourse[]> {
  const data = await deleteCourseDB(id);
  if (!data.length) throw new Error('no data');

  return data;
}
export { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourse };