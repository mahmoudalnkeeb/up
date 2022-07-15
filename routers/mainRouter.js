const router = require('express').Router();
const users = require('./apis/users');
const posts = require('./apis/posts');
const articles = require('./apis/articles');
const dashboard = require('./apis/dashboard');
const comments = require('./apis/comments');
const isAdmin = require('../middlewares/isAdmin');

router.use('/users', users);
router.use('/posts', posts);
router.use('/articles', articles);
router.use('/dashboard', isAdmin, dashboard);
router.use('/comments', comments);

module.exports = router;
