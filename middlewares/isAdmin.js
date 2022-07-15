const verify = require('../utils/jwt').verify;
const isAdmin = (req, res, next) => {
  if (req.path !== '/admin') {
      console.log(req.path);
    let admin = req.cookies.admin;
    let authorized = verify(admin) ? true : false;
    if (authorized) {
      return next();
    } else {
      req.bool = false;
      return res.status(401).json({ message: 'unauthorized' });
    }
  }
  next()
};

module.exports = isAdmin;
