const multer = require('multer');

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
};

const profileStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'imgs/profile_imgs');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  },
});
const postStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'imgs/post_imgs');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  },
});
const articleStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'imgs/article_imgs');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  },
});

module.exports = {
  profile: multer({ storage: profileStorage }).single('profile'),
  post: multer({ storage: postStorage }).single('postImage'),
  article: multer({ storage: articleStorage }).single('article')
};
