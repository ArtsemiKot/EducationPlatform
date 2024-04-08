interface iUsers {
  id: number;
  name: string;
  surname: string;
  email: string;
  pwd: string;
}

interface iCourse {
  id: number;
  course: string;
  description: string;
}
interface iLessons {
  id: number;
  title: string;
  course_id:number;
}
export { iUsers, iCourse, iLessons };
