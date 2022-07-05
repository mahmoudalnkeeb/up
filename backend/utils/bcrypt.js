const bcrypt = require('bcrypt');
let saltRounds = 10;
let hash = (password) => {
  return bcrypt.hashSync(password + genSalt, saltRounds);
};
let compare = (string, password) => {
  return bcrypt.compareSync(password + genSalt, string);
};
let genSalt = () => {
  return bcrypt.genSaltSync(saltRounds);
};

module.exports = { hash, compare };
