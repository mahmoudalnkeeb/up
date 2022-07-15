const pool = require('../config/db');

class Article {
  async getArticleById(id) {
    let query = 'SELECT * FROM articles WHERE id = $1';
    let res = await pool.query(query, [id]);
    let article = res.rows[0];
    return article;
  }
  async getArticles(created_at, user_id) {
    let query1 = 'SELECT following FROM users WHERE id = $1';
    let res1 = await pool.query(query1, [user_id]);
    let following = res1.rows[0].following;
    let query2 =
      'SELECT * FROM articles WHERE user_id = ANY ($1) AND created_at < $2 ORDER BY created_at DESC LIMIT 10';
    let lastDate = created_at || date();
    let res2 = await pool.query(query2, [following, lastDate]);
    let articles = res2.rows;
    return articles;
  }
  async userArticles(user_id) {
    let query = 'SELECT * FROM articles WHERE user_id = $1';
    let res = await pool.query(query, [user_id]);
    let userArticles = res.rows;
    return userArticles;
  }
  async newArticle(title, content, photo, user_id) {
    let query =
      'INSERT INTO articles(title , content ,  photo , user_id) VALUES($1 ,$2 ,$3 , $4) RETURNING title , content ,  photo , user_id';
    let res = await pool.query(query, [title, content, photo, user_id]);
    let data = res.rows[0];
    return data;
  }
  async upArticle(id) {
    let query = 'UPDATE articles SET ups = ups + 1 WHERE id = $1';
    let res = await pool.query(query, [id]);
    let article = res.rows[0];
    return article;
  }
  async editArticle(id, content, title) {
    let query = 'UPDATE articles SET content = $1 title = $2 WHERE id = $3 ';
    let res = await pool.query(query, [content, title, id]);
    let article = res.rows[0];
    return article;
  }
  async deleteArticle(id) {
    let query = 'DELETE FROM articles WHERE id = $1 ';
    let res = await pool.query(query, [id]);
    let article = res.rows[0];
    return article;
  }
}

module.exports = Article;
