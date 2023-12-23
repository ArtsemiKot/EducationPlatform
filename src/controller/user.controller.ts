import express, { Request, Response, NextFunction } from 'express';
import { getAllUsers, getUserByID, updateUserByID, deleteUserByID } from '../service/user.service';
import buildResponse from '../helper/buildresponse';
import { isValidUserBody, isValidId } from '../helper/validation';
const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUsers();
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', isValidId, async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getUserByID(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.put('/:id', isValidId, isValidUserBody, async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUserByID(id, name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.delete('/:id', isValidId, async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await deleteUserByID(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});
export default route;
