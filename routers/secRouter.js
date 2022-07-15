const logger = require('../middlewares/logger');

const secRouter = require('express').Router();

secRouter.get('/', logger, (req, res, next) => {
  try {
    res.render('index');
  } catch (error) {
    next(error);
  }
});
secRouter.get('/donate', logger, (req, res, next) => {
  try {
    res.render('donate');
  } catch (error) {
    next(error);
  }
});

module.exports = secRouter;
