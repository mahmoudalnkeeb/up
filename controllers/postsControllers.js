const Post = require('../models/post');
const posts = new Post();
class PostsController {
  async getPostByid(id) {
    let post = await posts.getPostById(id);
    return post;
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

  async createPost(userId, content, photo) {
    let postData = await posts.createPost(userId, content, photo);
    return postData;
  }

  async upPost(id) {
    let upedPost = await posts.upPost(id);
    return upedPost;
  }
  async editPost(id , content){
    let post = await posts.editPost(id , content)
    return post
  }
  async deletePost(id){
    let post = await posts.deletePost(id)
    return post
  }
}

module.exports = PostsController;
