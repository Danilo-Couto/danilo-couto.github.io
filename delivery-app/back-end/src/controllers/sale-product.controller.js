const { getAllService, getByIdService } = require('../services/saleProduct.service');

const getAllController = async (_req, res, next) => {
  try {
    const saleProduct = await getAllService();
    return res.status(200).json(saleProduct || []);
  } catch (error) {
    next(error); 
  }
};

const getAllBySaleIdController = async (req, res, next) => {
  try {
    const saleProduct = await getByIdService(req.params.id);
    return res.status(200).json(saleProduct);
  } catch (error) {
    next(error); 
  }
};

module.exports = { getAllController, getAllBySaleIdController };
