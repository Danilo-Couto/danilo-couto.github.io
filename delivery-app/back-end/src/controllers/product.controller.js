const { getAllService, getByIdService } = require('../services/product.service');

const getAllController = async (_req, res, next) => {
  try {
    const products = await getAllService();
    return res.status(200).json(products);
  } catch (error) {
    next(error); 
  }
};

const getByIdController = async (req, res, next) => {
  try {
    const product = await getByIdService(req.params.id);
    return res.status(200).json(product);
  } catch (error) {
    next(error); 
  }
};

module.exports = { getAllController, getByIdController };
