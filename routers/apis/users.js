const router = require('express').Router();
const UserController = require('../../controllers/usersControllers');
let usersController = new UserController();
const authorization = require('../../middlewares/authorization');
const uploadImage = require('../../utils/imageBox');
const Jwt = require('../../utils/jwt');
const upload = require('../../utils/multer');

router.get('/:id', authorization, async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.post('/signup', upload.single('profile'), async (req, res, next) => {
  try {
    let img = req.file.path;
    let imgUrl = await uploadImage(img, 'profile');
    let data = {
      fname: req.body.fname,
      lname: req.body.lname,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      phone: req.body.phone,
      dob: req.body.dob,
      gender: req.body.gender,
      country: req.body.country,
      bio: req.body.bio,
      verified: req.body.verified,
      profile_pic: imgUrl,
    };
    await usersController.signUp(data);
    res.status(201).json({ message: 'created' });
  } catch (error) {
    next(error);
  }
});

router.post('/login', async (req, res, next) => {
  let data = {
    username: req.body.username,
    password: req.body.password,
  };
  let response = await usersController.login(data);
  res.cookie('token', response).redirect(301, '/home');
  next();
});

router.post('/logout', (req, res) => {
  res.clearCookie('token').redirect('/login');
});

router.put('/follow/:followId', authorization, async (req, res, next) => {
  try {
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId;
    let followed = await usersController.follow(id, req.params.followId);
    res.status(200).json(followed);
  } catch (error) {
    next(error);
  }
});

router.put('/unfollow/:unfollowId', authorization, async (req, res, next) => {
  try {
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId;
    let unfollowed = await usersController.unfollow(id, req.params.unfollowId);
    res.status(200).json(unfollowed);
  } catch (error) {
    next(error);
  }
});

router.put('/name', authorization, async (req, res, next) => {
  try {
    let { fname, lname } = req.body;
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId;
    let newName = await usersController.updateName(fname, lname, id);
    return res.json(newName);
  } catch (error) {
    next(error);
  }
});

router.put('/password', authorization, async (req, res, next) => {
  try {
    let { newPass, oldPass } = req.body;
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId;
    let pass = await usersController.updatePass(oldPass, newPass, id);
    return res.status(200).json(pass);
  } catch (error) {
    next(error);
  }
});

router.put('/image', authorization, async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.put('/bio', authorization, async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});

router.delete('/', authorization, async (req, res, next) => {
  try {
    let password = req.body.password;
    let token = Jwt.decode(req.cookies.token);
    let userId = token.userId;
    await usersController.deleteUser(userId, password);
    return res.clearCookie('token').redirect('/login');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
