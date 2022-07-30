const errMessages = require('../utils/errMessages');
const err = require('../utils/err');
const { 
  loginSchema,
  registerSchema,
  updateSaleSchema,
  saleSchema } = require('../utils/joiSchemas');

const loginValidation = (req, _res, next) => {
  const { body } = req;
  const { error } = loginSchema.validate(body);
  if (error) {
    return next({
      code: 'badRequest', message: error.details[0].message,
    });
  }
  return next();
};

const registerValidation = (req, _res, next) => {
  const { body } = req;
  const { error } = registerSchema.validate(body);
  if (error) {
    return next({
      code: 'badRequest', message: error.details[0].message,
    });
  }
  return next();
};

const createSaleValidation = (req, _res, next) => {
  const { body } = req;
  const { error } = saleSchema.validate(body);
  if (error) {
    return next({
      code: 'badRequest', message: error.details[0].message,
    });
  }
  return next();
};

const idValidation = (req, _res, next) => {
  const { id } = req.params;
  if (!id) {
    throw err('unauthorized', errMessages.badRequest);
  }
  return next();
};

const updateSaleValidation = (req, _res, next) => {
  const { body } = req;
  const { error } = updateSaleSchema.validate(body);
  if (error) {
    return next({
      code: 'badRequest', message: error.details[0].message,
    });
  } 
  return next();
};

module.exports = { 
  loginValidation,
  registerValidation,
  idValidation,
  createSaleValidation,
  updateSaleValidation };
