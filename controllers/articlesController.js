const Article = require('../models/article');
const articles = new Article();
class ArticleController {
  async getArticleById(id) {
    let article = await articles.getArticleById(id);
    return article;
  }
  async getArticles(created_at, user_id) {
    let articles = await articles.getArticles(created_at, user_id);
    return articles;
  }
  async userArticles(user_id) {
    let articles = await this.userArticles(user_id);
    return articles;
  }
  async newArticle(title, content, photo, user_id) {
    let article = await articles.newArticle(title, content, photo, user_id);
    return article;
  }
  async upArticle(id) {
    let article = await articles.upArticle(id);
    return article;
  }
  async editArticle(id, content, title) {
    let article = await articles.editArticle(id, content, title);
    return article;
  }
  async deleteArticle(id) {
     let article = await articles.deleteArticle(id)
     return article
  }
}

module.exports = ArticleController;
