const db = require('../config/db');

class User {
  // CREATE methods
  async signUp(data) {
    let query =
      'INSERT INTO users(id , fname ,lname , username , password , email , phone , dob ,gender , country, profile_pic , bio ) VALUES($1 , $2 , $3 , $4 , $5 , $6 , $7 , $8 , $9 , $10 , $11 , $12 ) RETURNING *';
    let con = await db.connect();
    let res = await con.query(query, [
      data.id,
      data.fname,
      data.lname,
      data.username,
      data.password,
      data.email,
      data.phone,
      data.dob,
      data.gender,
      data.country,
      data.profile_pic,
      data.bio,
    ]);
    con.release();
    return res;
  }
  // READ methods
  async login(username) {
    let query = 'SELECT id , username , password FROM users WHERE username = $1 ';
    let con = await db.connect();
    let res = await con.query(query, [username]);
    let data = res.rows[0];
    con.release();
    return data;
  }
  // get hashed password method
  async getPass(id) {
    let query = 'SELECT password FROM users WHERE id = $1';
    let con = await db.connect();
    let res = await con.query(query, [id]);
    let data = res.rows[0];
    con.release();
    return data;
  }

  async getUserById(id) {
    let query =
      'SELECT fname , lname , phone , bio , email , following , followers  FROM users WHERE id = $1';
    let con = await db.connect();
    let res = await con.query(query, [id]);
    let data = res.rows[0];
    con.release();
    return data;
  }

  // DELETE methods
  async delete(id, password) {
    let query = 'DELETE FROM users WHERE id = $1';
    let con = await db.connect();
    let res = await con.query(query, [id]);
    let data = res.rows[0];
    con.release();
    return data;
  }

  // UPDATE methods
  async follow(id, follow_id) {
    let query1 =
      'UPDATE users SET following =  array_prepend($1, following) WHERE id = $2';
    let query2 =
      'UPDATE users SET followers =  array_prepend($1, followers) WHERE id = $2';

    let con = await db.connect();
    let res1 = await con.query(query1, [follow_id, id]);
    let res2 = await con.query(query2, [id, follow_id]);
    return { data1: res1.rows, data2: res2.rows };
  }
  async unfollow(id, unfollow_id) {
    let query1 =
      'UPDATE users SET following =  array_remove(following , $2) WHERE id = $1';
    let query2 =
      'UPDATE users SET followers =  array_remove(followers , $1) WHERE id = $2';

    let con = await db.connect();
    let res1 = await con.query(query1, [unfollow_id, id]);
    let res2 = await con.query(query2, [id, unfollow_id]);
    return { data1: res1.rows, data2: res2.rows };
  }
  async updateName(fname, lname, id) {
    let query =
      'UPDATE users SET fname = $1 , lname = $2 WHERE id = $3 RETURNING fname , lname';
    let con = await db.connect();
    let res = await con.query(query, [fname, lname, id]);
    let data = res.rows[0];
    con.release();
    return data;
  }
  async updatePass(id, newPass) {
    let query = 'UPDATE users SET password = $1 WHERE id = $2 ';
    let con = await db.connect();
    let res = await con.query(query, [newPass, id]);
    let data = res.rows[0];
    con.release();
    return data;
  }
}

module.exports = User;
