const authorization = require('../../middlewares/authorization');

const router = require('express').Router();

router.get('/', authorization, (req, res, next) => {
  try {
    return res.status(200).json({ message: `welcome to ${req.baseUrl}` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
