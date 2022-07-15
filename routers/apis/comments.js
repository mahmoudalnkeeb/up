const router = require('express').Router();

router.get('/', (req, res, next) => {
  try {
    res.json({ message: 'comments' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
