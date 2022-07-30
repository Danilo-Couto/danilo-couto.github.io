const express = require('express');
const { getAllController, loginController } = require('../controllers/user.controller');
const { loginValidation } = require('../middlewares/validations');

const userRoute = express.Router();

userRoute.route('/')
  .get(getAllController)
  .post(loginValidation, loginController);

module.exports = userRoute;
