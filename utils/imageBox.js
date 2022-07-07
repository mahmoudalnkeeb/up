const { imgbox } = require('imgbox-js');

const authCookie = process.env.AUTH_COOKIE;

const uploadImage = async (image, title = 'profile' || 'post' || 'article') => {
  let response = await imgbox(image, {
    album_title: title,
    auth_cookie: authCookie,
  });
  let url = response.data[0].original_url;
  console.log(response);
  console.log(image);
  return url;
};

module.exports = uploadImage;
