const secRouter = require('express').Router();

secRouter.get('/', (req, res, next) => {
  try {
    res.render('index');
  } catch (error) {
    next(error);
  }
});
secRouter.get('/donate', (req, res, next) => {
  try {
    res.render('donate');
  } catch (error) {
    next(error);
  }
});

module.exports = secRouter