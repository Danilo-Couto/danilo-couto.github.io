const httpStatus = require('../utils/httpStatus');
const { getAllService, loginService, registerService } = require('../services/user.service');

const getAllController = async (req, res, next) => {
  try {
    const users = await getAllService();
    return res.status(200).json(users);
  } catch (error) {
    next(error); 
  }
};

const loginController = async (req, res, next) => {
  try {
    const user = await loginService(req.body);
    return res.status(httpStatus.ok).json(user);
  } catch (error) {
    next(error); 
  }
};

const registerController = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await registerService(body);
    return res.status(httpStatus.created).json(createdUser);
  } catch (error) {
    next(error); 
  }
};

module.exports = { getAllController, loginController, registerController };
