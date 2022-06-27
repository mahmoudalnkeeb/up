const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;
class Jwt {
  constructor(username, date) {
    this.username = username;
    this.date = date;
  }
  sign() {
    let token = jwt.sign(
      {
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
