const Article = require('../models/article');
const Post = require('../models/post');
const User = require('../models/user');

class DashboardController {
  // READ methods
  static async adminLogin(username , password) {

  }
  static async getAllUsers() {}
  static async getUserById() {}
  static async getAllPosts() {}
  static async getPostById() {}
  static async getAllPostsComments() {}
  static async getPostCommentById() {}
  static async getAllArticles() {}
  static async getArticleById() {}
  static async getAllArticlesComments() {}
  static async getArticleCommentById() {}
  static async getUsersCount() {}
  static async getPostsCount() {}
  static async getArticlesCount() {}
  // CREATE methods

  // UPDATE methods
  static async banUser() {}
  // DELETE methods
  static async deleteUser() {}
  static async deleteAllusers() {}
}

module.exports = DashboardController;
