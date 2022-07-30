const err = require('../utils/err');
const errMessages = require('../utils/errMessages');

const { Sale, SaleProduct } = require('../database/models');

const getAllService = async (userId) => Sale.findAll({ where: { userId } });

const getByIdService = async (id, userId) => {
  const sale = await Sale.findByPk(id, { where: { userId } });
  if (!sale) throw err('notFound', errMessages.notFound);
  return sale;
};

const createService = async (body, userId) => {    
  const { 
    sellerId,
    totalPrice, deliveryAddress,
    deliveryNumber,
    productId, quantity } = body;
    
  const newSale = await Sale.create({
    userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, status: 'Pendente' });
    
  const newArray = productId.reduce((array, id, index) =>
    array.concat([{ id, qnt: quantity[index] }]), []);

  Promise.all(newArray.map(async ({ id, qnt }) => {
    await SaleProduct.create({ saleId: newSale.id, productId: id, quantity: qnt });
  }));

  return newSale;
};

const updateService = async (id, userId, { status }) => {
  const saleToUpdate = await getByIdService(id, userId);
  saleToUpdate.status = status;
  await saleToUpdate.save();    

  return saleToUpdate;
};

module.exports = { getAllService, getByIdService, createService, updateService };
