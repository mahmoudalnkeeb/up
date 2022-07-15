const Dashboard = require('../models/services/dashboard');
const Jwt = require('../utils/jwt');

class DashboardController {
  // READ methods
  static async adminLogin(username, password) {
    let admin = await Dashboard.adminLogin(username, password);
    if (admin) {
      let jwt = new Jwt(admin.id, admin.user, Date.now());
      return {
        token: jwt.sign(),
        admin: true,
      };
    }
    return { message: 'wrong data', admin: false };
  }
  static async getAllUsers() {
    let users = await Dashboard.getAllUsers();
    return users;
  }
  static async getUserById() {}
  static async getAllPosts() {
    let posts = await Dashboard.getAllPosts();
    return posts;
  }
  static async getPostById() {}
  static async getAllPostsComments() {}
  static async getPostCommentById() {}
  static async getAllArticles() {
    let articles = await Dashboard.getAllArticles();
    return articles;
  }
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
