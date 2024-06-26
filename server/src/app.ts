import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import user from './controller/user.controller';
import api from './controller/api.controller';
import course from './controller/courses.controller';
import lesson from './controller/lessons.controller';
import cookieParser from 'cookie-parser'
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true, methods: 'GET,POST,PUT,DELETE,PATCH' }));
app.use(cookieParser())
app.use('/user', user);
app.use('/api', api);
app.use('/course', course);
app.use('/lesson', lesson);
app.use((error, req: Request, res: Response, next: NextFunction) => res.send.message);

export default app;
