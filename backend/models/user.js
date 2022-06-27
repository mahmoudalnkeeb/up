const db = require('../config/db');

class User {
  constructor(data) {
    this.name = data.name;
    this.username = data.username;
    this.password = data.password;
    this.email = data.email;
    this.phone = data.phone;
    this.dob = data.dob;
    this.profile_pic = data.profile_pic;
    this.bio = data.bio;
    this.verified = data.verified;
  }
  async signUp() {
    try {
      let sql =
        'INSERT INTO users(name , username , password , email , phone , dob , profile_pic , bio , verified) VALUES($1 , $2 , $3 , $4 , $5 , $6 , $7 , $8 , $9) RETURNING *';
      let con = await db.connect();
      let res = await con.query(sql, [
        this.name,
        this.username,
        this.password,
        this.email,
        this.phone,
        this.dob,
        this.profile_pic,
        this.bio,
        this.verified,
      ]);
      con.release();
      return { message: 'account created successfully' };
    } catch (e) {
      return { message: 'something went wrong' };
    }
  }
 static async login(username) {
    try {
      let sql = 'SELECT  username , password FROM users WHERE username = $1';
      let con = await db.connect();
      let res = await con.query(sql, [username]);
      let data = res.rows[0];
      con.release();
      return data;
    } catch (e) {
      return e;
    }
  }
}

module.exports = User;
