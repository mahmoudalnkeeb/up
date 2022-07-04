const router = require('express').Router();
const home = require('./apis/home');
const users = require('./apis/users');
const posts = require('./apis/posts');
const articles = require('./apis/articles');
const upload = require('./apis/upload');
const dashboard = require('./apis/dashboard');

router.use('/home', home);
router.use('/users', users);
router.use('/posts', posts);
router.use('/articles', articles);
router.use('/upload', upload);
router.use('/dashboard', dashboard);

module.exports = router;
