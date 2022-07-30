const md5 = require('md5');
const { User } = require('../database/models');
const { generateToken } = require('../utils/token');
const errMessages = require('../utils/errMessages');
const err = require('../utils/err');

const getAllService = async () => User.findAll();

const emailIsValid = async (email) => {
  const allUsersDB = await getAllService();
  const compareEmails = allUsersDB.some((userDB) => userDB.email === email);
  return compareEmails;
};

const loginService = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });  

  if (!user) {
    throw err('notFound', errMessages.notFound);
  }
  if (user.password !== md5(password)) {
    throw err('unauthorized', errMessages.invalidEntries);
  }
  
  const token = generateToken(user);
  const userFound = { id: user.id, name: user.name, email, role: user.role, token };

  return { userFound };
};

const registerService = async ({ name, email, password }) => {
  const userExists = await emailIsValid(email);
  if (userExists) {
    throw err('conflict', errMessages.emailRegistered);
  }
  const { id } = await User.create({ name, email, password: md5(password), role: 'customer' });

  return { id, name, email }; // retirada da "role"
};

module.exports = { getAllService, loginService, registerService };
