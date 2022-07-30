const JOI = require('joi');

const loginSchema = JOI.object({
  email: JOI.string().email().required(),
  password: JOI.string().required().min(6),
});

const registerSchema = JOI.object({
  name: JOI.string().required(),
  email: JOI.string().email().required(),
  password: JOI.string().min(6).required(),
});

const saleSchema = JOI.object({
  sellerId: JOI.number().required(),
  totalPrice: JOI.number().required(),
  deliveryAddress: JOI.string().required(),
  deliveryNumber: JOI.string().required(),
  productId: JOI.array().items(JOI.number()).required(),
  quantity: JOI.array().items(JOI.number()).required(),
});

const updateSaleSchema = JOI.object({
  status: JOI.string().required(),
});

module.exports = { loginSchema, registerSchema, saleSchema, updateSaleSchema };
