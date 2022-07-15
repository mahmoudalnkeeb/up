const router = require('express').Router();
const users = require('./apis/users');
const posts = require('./apis/posts');
const articles = require('./apis/articles');
const dashboard = require('./apis/dashboard');
const comments = require('./apis/comments');
const isAdmin = require('../middlewares/isAdmin');
const logger = require('../middlewares/logger');

router.use('/users', logger, users);
router.use('/posts', logger, posts);
router.use('/articles', logger, articles);
router.use('/dashboard', logger, isAdmin, dashboard);
router.use('/comments', logger, comments);

module.exports = router;
