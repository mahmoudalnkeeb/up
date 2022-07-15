const DashboardController = require('../../controllers/dashboardController');
const isAdmin = require('../../middlewares/isAdmin');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  try {
    res.render('dashboard');
  } catch (error) {
    next(error);
  }
});

router.post('/admin', async (req, res, next) => {
  try {
    let { username, password } = req.body;
    console.log({ username, password });
    let login = await DashboardController.adminLogin(username, password);
    if (login.admin == true) {
      let oneDay = 60 * 60 * 24;
      return res
        .cookie('admin', login.message, { maxAge: oneDay })
        .redirect(200, '/dashboard');
    }
    res.status(215).json({ message: 'Bad Authentication data' });
  } catch (error) {
    next(error);
  }
});
router.post('/', async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

module.exports = router;
