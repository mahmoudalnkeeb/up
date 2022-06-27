const verify = require('../utils/jwt').verify;
const authorization = (req, res, next) => {
  let token = req.cookies.token;
  let authorized = verify(token) ? true : false;
  if (authorized) {
    req.authorized = true;
    return next();
  } else {
    req.authorized = false;
    next();
  }
};

module.exports = authorization;
