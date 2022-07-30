const express = require('express');
const { 
  getAllController,
  getByIdController,
  updateController } = require('../controllers/seller-sale.controller');
const auth = require('../middlewares/auth');
const { idValidation, updateSaleValidation } = require('../middlewares/validations');

const sellerSaleRoute = express.Router();

sellerSaleRoute
  .get('/', auth, getAllController)
  .get('/:id', auth, idValidation, getByIdController)
  .put('/:id', auth, idValidation, updateSaleValidation, updateController);

module.exports = sellerSaleRoute;
