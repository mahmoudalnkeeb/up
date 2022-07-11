const router = require('express').Router();
const users = require('./apis/users');
const posts = require('./apis/posts');
const articles = require('./apis/articles');
const dashboard = require('./apis/dashboard');

router.use('/users', users);
router.use('/posts', posts);
router.use('/articles', articles);
router.use('/dashboard', dashboard);

module.exports = router;
