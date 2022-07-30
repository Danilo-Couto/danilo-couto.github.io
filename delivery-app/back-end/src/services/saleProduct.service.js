const err = require('../utils/err');
const errMessages = require('../utils/errMessages');

const { SaleProduct } = require('../database/models');

const getAllService = async () => SaleProduct.findAll();

const getByIdService = async (saleId) => {
  const saleProduct = await SaleProduct.findAll({ where: { saleId } });

  if (!saleProduct) {
    throw err('notFound', errMessages.notFound);
  }
  return saleProduct;
};

module.exports = { getAllService, getByIdService };
