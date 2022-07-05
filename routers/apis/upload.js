const router = require('express').Router();
const path = require('path');
const { profileImage } = require('../../controllers/usersControllers');
let profileDest = path.resolve(path.join(process.cwd(), '/imgs/profile_pics'));
const multer = require('../../utils/images');


router.post('/profile', multer.profile, (req, res, next) => {
  try {
    profileImage(req.file.path)
    res.json(req.file)
  } catch (error) {
    next(error);
  }
});


router.post('/post', multer.post, (req, res, next) => {
  try {
    res.json(req.file);
  } catch (error) {
    next(error);
  }
});

router.post('/article', multer.article, (req, res, next) => {
  try {
    res.json(req.file);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
