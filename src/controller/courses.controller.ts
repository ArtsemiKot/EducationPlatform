import express, { Request, Response } from 'express';
import buildResponse from '../helper/buildresponse';
import { getAllCourse } from '../service/courses.service';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void>  => {
  try {
    const data = await getAllCourse();
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});
  export default route;