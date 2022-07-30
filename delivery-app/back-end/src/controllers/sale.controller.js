const { 
  getAllService,
  getByIdService,
  createService,
  updateService } = require('../services/sale.service');

const getAllController = async (req, res, next) => {
  try {
    const sales = await getAllService(req.userToken.id);
    return res.status(200).json(sales || []);
  } catch (error) {
    next(error); 
  }
};

const getByIdController = async (req, res, next) => {
  try {
    const sale = await getByIdService(req.params.id, req.userToken.id);
    return res.status(200).json(sale);
  } catch (error) {
    next(error); 
  }
};

const createController = async (req, res, next) => {
  try {
    const sale = await createService(req.body, req.userToken.id);
    return res.status(201).json(sale);
  } catch (error) {
    next(error); 
  }
};

const updateController = async (req, res, next) => {
  try {
    const sale = await updateService(req.params.id, req.userToken.id, req.body);
    return res.status(200).json(sale);
  } catch (error) {
    next(error); 
  }
};

module.exports = { getAllController, getByIdController, createController, updateController };
