const errMessages = {
  nameRequired: '"name" is required',
  emptyName: '"name" is not allowed to be empty',
  nameLength: '"name" length must be at least 6 characters long',
  emailRequired: '"email" is required',
  emptyEmail: '"email" is not allowed to be empty',
  emailLength: '"email" must be a valid email',
  passwordRequired: '"password" is required',
  emptyPassword: '"password" is not allowed to be empty',
  passwordLength: '"password" length must be at least 6 characters long',
  invalidEntries: 'Incorrect username or password',
  userNotFound: 'user not found',
  notFound: 'not found',
  emailRegistered: 'Email already registered',
  tokenNotFound: 'Token not found',
  invalidToken: 'Expired or invalid token',
  notAllowed: 'Only admins have permission to that',
};

module.exports = errMessages;
