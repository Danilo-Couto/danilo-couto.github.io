const express = require('express');
const { 
  getAllController,
  getAllBySaleIdController,
} = require('../controllers/sale-product.controller');
const auth = require('../middlewares/auth');
const { idValidation } = require('../middlewares/validations');

const saleRoute = express.Router();

saleRoute
  .get('/', auth, getAllController)
  .get('/:id', auth, idValidation, getAllBySaleIdController);

module.exports = saleRoute;
