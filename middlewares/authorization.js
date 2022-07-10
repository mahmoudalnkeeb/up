const verify = require('../utils/jwt').verify;
const authorization = (req, res, next) => {
  let token = req.cookies.token;
  let authorized = verify(token) ? true : false;
  if (authorized) {
    return next();
  } else {
    req.bool = false
    return res.status(401).json({ message: 'unauthorized' });
  }
};

module.exports = authorization;
