const DashboardController = require('../../controllers/dashboardController');

const router = require('express').Router();

router.get('/', (req, res, next) => {
  try {
    res.render('dashboard');
  } catch (error) {
    next(error);
  }
});

router.get('/allusers', async (req, res, next) => {
  try {
    let data = await DashboardController.getAllUsers();
    res.json(data);
  } catch (error) {
    next(error);
  }
});
router.get('/allposts', async (req, res, next) => {
  try {
    let data = await DashboardController.getAllPosts();
    res.json(data);
  } catch (error) {
    next(error);
  }
});
router.get('/allarticles', async (req, res, next) => {
  try {
    let data = DashboardController.getAllArticles();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  try {
    let { username, password } = req.body;
    let login = await DashboardController.adminLogin(username, password);
    if (login.admin == true) {
      return res.status(200).cookie('admin', login.token).json({
        status: 'success',
        token: login.token,
        admin: true,
      });
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
