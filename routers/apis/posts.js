const PostsController = require('../../controllers/postsControllers');
const postsController = new PostsController();
const Jwt = require('../../utils/jwt');
const authorization = require('../../middlewares/authorization');
const router = require('express').Router();
const uploadImage = require('../../utils/imageBox');
const upload = require('../../utils/multer');

router.get('/:id', authorization, async (req, res, next) => {
  try {
    let id = req.params.id;
    let post = await postsController.getPostByid(id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
});

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

router.post(
  '/create',
  upload.single('postImage'),
  authorization,
  async (req, res, next) => {
    try {
      let img = req.file.path;
      let imgUrl = uploadImage(img, 'post');
      let token = Jwt.decode(req.cookies.token);
      let id = token.userId,
        content = req.body.content,
        photo = imgUrl;
      let postData = await postsController.createPost(id, content, photo);
      res.json(postData);
    } catch (error) {
      next(error);
    }
  }
);

router.put('/up', async (req, res, next) => {
  try {
    let id = req.query.id;
    await postsController.upPost(id);
    res.status(200).json({ message: 'post uped' });
  } catch (error) {
    next(error);
  }
});

router.put('/', async (req, res, next) => {
  try {
    let { id, content } = req.body;
    await postsController.editPost(id, content);
    res.status(200).json({ message: 'post edited' });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    let id = req.params.id;
    await postsController.deletePost(id);
    res.status(200).json({ message: 'post deleted' });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
