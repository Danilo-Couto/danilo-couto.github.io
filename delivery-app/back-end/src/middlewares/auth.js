const { verifyToken } = require('../utils/token');
const msg = require('../utils/errMessages');

const err = (code, message) => ({ code, message });

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw err('unauthorized', msg.tokenNotFound);
    const payload = verifyToken(token);
    req.userToken = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
