const Post = require('../models/post');
const posts = new Post();
class PostsController {
  async createPost(userId, content, photo) {
    let postData = await posts.createPost(userId, content, photo);
    return postData;
  }
  async getUserPosts(userId) {
    let userPosts = await posts.getUserPosts(userId);
    return userPosts;
  }
  async getFollowingPosts(id, created_at) {
    console.log(created_at);
    let newPosts = await posts.getFollowingPosts(id, created_at);
    return newPosts;
  }
}

module.exports = PostsController;
