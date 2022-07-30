const err = require('../utils/err');
const errMessages = require('../utils/errMessages');

const { Sale } = require('../database/models');

const getAllService = async (sellerId) => Sale.findAll({ where: { sellerId } });

const getByIdService = async (id, sellerId) => {
  const sale = await Sale.findByPk(id, { where: { sellerId } });
  if (!sale) throw err('notFound', errMessages.notFound);
  return sale;
};

const updateService = async (id, sellerId, { status }) => {
  const saleToUpdate = await getByIdService(id, sellerId);
  saleToUpdate.status = status;
  await saleToUpdate.save();    

  return saleToUpdate;
};

module.exports = { getAllService, getByIdService, updateService };
