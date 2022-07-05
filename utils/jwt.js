const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;
class Jwt {
  constructor(id , username, date) {
    this.id = id
    this.username = username;
    this.date = date;
  }
  sign() {
    let token = jwt.sign(
      {
        userId:this.id,
        username: this.username,
        date: this.date,
      },
      secret
    );
    return token;
  }
  static verify(token) {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      return false;
    }
  }
  static decode(token) {
    return jwt.decode(token);
  }
}

module.exports = Jwt;
