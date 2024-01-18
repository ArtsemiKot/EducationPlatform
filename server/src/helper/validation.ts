import express, { Request, Response, NextFunction } from 'express';
import ExceptionType from '../exception/exception';
function isValidUserBody(req: Request, res: Response, next: NextFunction) {
  const { name, surname, email, pwd } = req.body;
  if (!name) throw new Error(ExceptionType.USER_TITLE_EMPTY);
  if (!surname) throw new Error(ExceptionType.USER_TITLE_EMPTY);
  if (!email) throw new Error(ExceptionType.USER_TITLE_EMPTY);
  if (!pwd) throw new Error(ExceptionType.USER_TITLE_EMPTY);
  if (!isNaN(name)) throw new Error(ExceptionType.USER_NAME_INVALID);
  if (!isNaN(surname)) throw new Error(ExceptionType.USER_SURNAME_INVALID);
  if (pwd.length < 8) throw new Error(ExceptionType.USER_PASSWORD_LENGTH_VALID);
  if (!/^[\w\.\-\$]+@+[a-z]+\.[a-z]{2,4}$/gm.test(email)) throw new Error(ExceptionType.USER_PASSWORD_VALID);
  next();
}

function isValidId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (isNaN(id)) throw new Error(ExceptionType.ID_NOT_A_NUMBER);
  if (id < 1) throw new Error(ExceptionType.ID_NEGATIVE);

  next();
}

export { isValidUserBody, isValidId };
