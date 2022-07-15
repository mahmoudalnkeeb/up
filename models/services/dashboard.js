const client = require('../../config/db');

class Dashboard {
  // READ methods
  static async adminLogin(username, password) {
    let user = process.env.ADMIN_USERNAME,
      pass = process.env.ADMIN_PASS,
      id = process.env.ADMIN_ID;
    if (username == user && password == pass) {
      console.log(true);
      return { user, id };
    }
    return false;
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

module.exports = Dashboard;
