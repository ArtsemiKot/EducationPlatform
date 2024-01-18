import jwt from 'jsonwebtoken';

function createToken(user) {
  const secret = 't1t1t1';
  const token = jwt.sign(user[0], secret);
  return token;
}

export default createToken;
