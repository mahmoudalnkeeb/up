const logger = (req, res, next) => {
  console.log('body: '+ JSON.stringify(req.body));
  console.log('method: '+req.method);
  console.log('path: '+req.path);
  console.log('ip: '+req.ip);
  console.log('originalUrl: '+req.originalUrl);
  console.log('Content-Type: '+req.headers['content-type']);
  next();
};

module.exports = logger;
