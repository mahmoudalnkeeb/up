const logger = (req, res, next) => {
  console.log(req.body);
  console.log(req.method);
  console.log(req.path);
  console.log(req.url);
  console.log(req.headers);
  next();
};

module.exports = logger;
