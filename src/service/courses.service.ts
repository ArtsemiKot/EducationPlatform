import { iCourse } from '../interfaces/interfaces';
import {getAllCourseDB} from '../repository/courses.repository'

async function getAllCourse():Promise<iCourse[]> {
  const data =await getAllCourseDB();
  if (!data.length) throw new Error('no data');
  return data;
}

export { getAllCourse };