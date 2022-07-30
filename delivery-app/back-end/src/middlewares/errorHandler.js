const status = require('../utils/httpStatus');

const error = (err, _req, res, _next) => {
  const { code, message } = err;
  if (code) return res.status(status[code]).json({ message });
  console.error(err);
  
  return res.status(status.serverErr).json({ message });
};

module.exports = error;
