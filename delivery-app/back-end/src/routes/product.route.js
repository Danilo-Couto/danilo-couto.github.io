const express = require('express');
const { getAllController, getByIdController } = require('../controllers/product.controller');
const auth = require('../middlewares/auth');
const { idValidation } = require('../middlewares/validations');

const userRoute = express.Router();

userRoute
  .get('/', auth, getAllController)
  .get('/:id', idValidation, getByIdController);

module.exports = userRoute;
