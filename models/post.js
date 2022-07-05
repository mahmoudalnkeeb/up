const db = require('../config/db');
const date = require('../utils/date');

class Post {
  async createPost(userId, content, photo) {
    let query =
      'INSERT INTO posts(content ,  photo , user_id) VALUES($1 ,$2 ,$3) RETURNING *';
    let con = await db.connect();
    let res = await con.query(query, [content, photo, userId]);
    let data = res.rows[0];
    return data;
  }

  async getUserPosts(id) {
    let query = 'SELECT * FROM posts WHERE user_id = $1';
    let con = await db.connect();
    let res = await con.query(query, [id]);
    let userPosts = res.rows;
    return userPosts;
  }

  async upPost(id) {
    let query = 'SELECT * FROM posts WHERE id = $1';
    let con = await db.connect();
    let res = await con.query(query, [id]);
    let post = res.rows[0];
    return post;
  }
  async getFollowingPosts(id, created_at) {
    let con = await db.connect();
    let query1 = 'SELECT following FROM users WHERE id = $1';
    let res1 = await con.query(query1, [id]);
    let following = res1.rows[0].following;
    let query2 =
      'SELECT * FROM posts WHERE user_id = ANY ($1) AND created_at < $2 ORDER BY created_at DESC LIMIT 10';
    let lastDate = created_at || date();
    console.log(lastDate);
    let res2 = await con.query(query2, [following, lastDate]);
    let posts = res2.rows;
    return posts;
  }
}

module.exports = Post;
