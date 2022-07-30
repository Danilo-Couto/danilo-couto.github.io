const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const jwtConfig = { expiresIn: '7d', algorithm: 'HS256' };

const generateToken = (user) => {
  const { id, email, role } = user;
  // delete user.password;
  const token = jwt.sign({ id, email, role }, secret, jwtConfig);

  return token;
};

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { generateToken, verifyToken };
