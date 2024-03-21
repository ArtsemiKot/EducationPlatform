import jwt from 'jsonwebtoken';

function createToken(user) {
  const token = jwt.sign(user[0], process.env.JWT_SECRET);
  return token;
}

export default createToken;
