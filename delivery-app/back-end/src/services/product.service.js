const { Product } = require('../database/models');
const errMessages = require('../utils/errMessages');
const err = require('../utils/err');

const getAllService = async () => {
  const products = await Product.findAll();
  return products;
};

const getByIdService = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw err('notFound', errMessages.notFound);
  }
  
  return product;
};

module.exports = { getAllService, getByIdService };
