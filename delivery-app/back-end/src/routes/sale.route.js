const express = require('express');
const { getAllController, getByIdController,
  createController, 
  updateController } = require('../controllers/sale.controller');
const auth = require('../middlewares/auth');
const { 
  idValidation,
  createSaleValidation,
  updateSaleValidation } = require('../middlewares/validations');

const saleRoute = express.Router();

saleRoute
  .get('/', auth, getAllController)
  .get('/:id', auth, idValidation, getByIdController)
  .post('/', auth, createSaleValidation, createController)
  .put('/:id', auth, idValidation, updateSaleValidation, updateController);

module.exports = saleRoute;
