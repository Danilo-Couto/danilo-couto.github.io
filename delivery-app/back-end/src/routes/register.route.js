const express = require('express');
const { registerController } = require('../controllers/user.controller');
const { registerValidation } = require('../middlewares/validations');

const userRoute = express.Router();

userRoute.route('/')
  .post(registerValidation, registerController);

module.exports = userRoute;
