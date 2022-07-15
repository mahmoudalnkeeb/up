const pool = require('../../config/db');

class Dashboard {
  // READ methods
  static async adminLogin(username, password) {
    let user = process.env.ADMIN_USERNAME,
      pass = process.env.ADMIN_PASS,
      id = process.env.ADMIN_ID;
    if (username == user && password == pass) {
      return { user, id };
    }
    return false;
  }
  static async getAllUsers() {
    let sql = 'SELECT * FROM users';
    let res = await pool.query(sql);
    return res.rows;
  }
  static async getUserById() {}
  static async getAllPosts() {
    let sql = 'SELECT * FROM posts';
    let res = await pool.query(sql);
    return res.rows;
  }
  static async getPostById() {}
  static async getAllPostsComments() {}
  static async getPostCommentById() {}
  static async getAllArticles() {
    let sql = 'SELECT * FROM articles';
    let res = await pool.query(sql);
    return res.rows;
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

module.exports = Dashboard;
