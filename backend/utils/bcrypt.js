const bcrypt = require('bcrypt');
require('dotenv').config();
let salt = process.env.SALT;
let saltRounds = 10;
let hash = (password) => {
  return bcrypt.hashSync(password + salt, saltRounds);
};
let compare = (string, password) => {
  return bcrypt.compareSync(password + salt, string);
};

module.exports = { hash, compare };
