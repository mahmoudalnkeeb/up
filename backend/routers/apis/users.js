const router = require('express').Router();
const UserController = require('../../controllers/usersControllers');
const authorization = require('../../middlewares/authorization');

// test
// router.get('/' , (req , res)=>{
//     res.json({ message: `welcome to ${req.baseUrl}` });
// })
router.post('/signup', async (req, res) => {
  let data = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    phone: req.body.phone,
    dob: req.body.dob,
    profile_pic: req.body.profile_pic,
    bio: req.body.bio,
    verified: req.body.verified,
  };
  let newUser = new UserController(data);
  let response = await newUser.signUp();
  res.json(response);
});
router.post('/login', async (req, res) => {
  let data = {
    username: req.body.username,
    password: req.body.password
  };
  let response = await UserController.login(data);
  res.cookie('token', response).status(200).json({ message: 'done' });
});
// router.get('/test', authorization, ( req, res) => {
//   res.send('hi');
// });
module.exports = router;
