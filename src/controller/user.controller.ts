import express, { Request, Response, NextFunction } from 'express';
import { getAllUsers, getUserByID, updateUserByID } from '../service/user.service';
const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllUsers()
        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const data = await getUserByID(id)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, surname, email, pwd } = req.body;
        const data = await updateUserByID(id, name, surname, email, pwd)
        res.status(200).send(data)
    } catch (error: any) {
        res.status(404).send(error.message)
    }
});


export default route