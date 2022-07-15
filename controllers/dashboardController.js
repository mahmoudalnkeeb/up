const Dashboard = require('../models/services/dashboard');
const date = require('../utils/date');
const Jwt = require('../utils/jwt');

class DashboardController {
  // READ methods
  static async adminLogin(username, password) {
    let admin = await Dashboard.adminLogin(username, password);
    if (admin) {
      let jwt = new Jwt(admin.id, admin.user, Date.now());
      return {
        message: jwt.sign(),
        admin: true,
      };
    }
    return { message: 'wrong data', admin: false };
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
