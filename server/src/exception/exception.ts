interface iExceptionType {
  DB_GET_USERS_NOT_FOUND: string;
  DB_GET_USERS_BY_ID_NOT_FOUND: string;
  DB_PUT_USERS_NOT_UPDATE: string;
  DB_DELETE_USER_NOT_DELETE: string;

  ID_NOT_A_NUMBER: string;
  ID_NEGATIVE: string;

  USER_TITLE_EMPTY: string;
  USER_NAME_INVALID: string;
  USER_SURNAME_INVALID: string;
  USER_PASSWORD_LENGTH_VALID: string;
  USER_PASSWORD_VALID: string;
}

const ExceptionType: iExceptionType = {
  DB_GET_USERS_NOT_FOUND: 'table users is empty',
  DB_GET_USERS_BY_ID_NOT_FOUND: 'user by id is not found',
  DB_PUT_USERS_NOT_UPDATE: 'user does not update',
  DB_DELETE_USER_NOT_DELETE: 'user does not delete',

  USER_TITLE_EMPTY: 'no data',
  USER_NAME_INVALID: 'incorrect name',
  USER_SURNAME_INVALID: 'incorrect surname',
  USER_PASSWORD_LENGTH_VALID: 'password should be > 8',
  USER_PASSWORD_VALID: 'incorrect email',

  ID_NOT_A_NUMBER: 'id is not a number',
  ID_NEGATIVE: 'id should not be negative',
};

export default ExceptionType;
