import express, { Request, Response, NextFunction } from 'express';
import { regestrationUser, authorizationUser } from '../service/api.service';
import buildResponse from '../helper/buildresponse';
import createToken from '../helper/jwt';
const route = express.Router();

route.post('/reg', async (req: Request, res: Response) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await regestrationUser(name, surname, email, pwd);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.post('/auth', async (req: Request, res: Response) => {
  try {
    const { email, pwd } = req.body;
    const data = await authorizationUser(email, pwd);
    const token = createToken(data);
    res.setHeader('authorization', [token]);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});
export default route;
