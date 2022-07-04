const PostsController = require('../../controllers/postsControllers');
const postsController = new PostsController();
const Jwt = require('../../utils/jwt');
const authorization = require('../../middlewares/authorization');
const images = require('../../utils/images');
const router = require('express').Router();

// GET requests

// get post by id
router.get('/:id', authorization, (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
});
// get all posts from following
router.get('/', authorization, async (req, res, next) => {
  try {
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId;
    let created_at = req.query.created_at;
    let posts = await postsController.getFollowingPosts(id, created_at);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
});

router.get('/userPosts', authorization, async (req, res, next) => {
  try {
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId;
    let userPosts = await postsController.getUserPosts(id);
    res.status(200).json(userPosts);
  } catch (error) {
    next(error);
  }
});

// POST requests
router.post('/create', images.post, authorization, async (req, res, next) => {
  try {
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId,
      content = req.body.content,
      photo = req.file.path;
    let postData = await postsController.createPost(id, content, photo);
    res.json(postData);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
