const ArticleController = require('../../controllers/articlesController');
const authorization = require('../../middlewares/authorization');
let articlesController = new ArticleController();
const router = require('express').Router();
const uploadImage = require('../../utils/imageBox');
const upload = require('../../utils/multer');

router.get('/:id', authorization, async (req, res, next) => {
  try {
    const id = req.params.id;
    let article = await articlesController.getArticleById(id);
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
});
router.get('/', authorization, async (req, res, next) => {
  try {
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId;
    let created_at = req.query.created_at;
    let articles = await articlesController.getArticles(created_at, id);
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});
router.get('/userarticles', authorization, async (req, res, next) => {
  try {
    let token = Jwt.decode(req.cookies.token);
    let id = token.userId;
    let articles = await articlesController.userArticles(id);
    res.status(200).json(articles);
  } catch (error) {
    next(error);
  }
});
router.post(
  '/create',
  authorization,
  upload.single('article'),
  async (req, res, next) => {
    try {
      let { title, content } = req.body;
      let image = req.file.path;
      let imgUrl = uploadImage(image, 'article');
      let article = await articlesController.newArticle(title, content, imgUrl);
      res.status(200).json(article);
    } catch (error) {
      next(error);
    }
  }
);
router.put('/up', authorization, async (req, res, next) => {
  try {
    let id = req.query.id;
    let article = await articlesController.upArticle(id);
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
});
router.put('/', authorization, async (req, res, next) => {
  try {
    let { id, title, content } = req.body;
    let article = await articlesController.editArticle(id, content, title);
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
});
router.delete('/:id', authorization, async (req, res, next) => {
  try {
    let id = req.params.id;
    let article = await articlesController.deleteArticle(id);
    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
