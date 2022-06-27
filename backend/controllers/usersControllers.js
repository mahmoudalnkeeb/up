const bcrypt = require('../utils/bcrypt');
const User = require('../models/user');
const Jwt = require('../utils/jwt');
class UserController {
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
      let data = {
        name: this.name,
        username: this.username,
        password: bcrypt.hash(this.password),
        email: this.email,
        phone: this.phone,
        dob: this.dob,
        profile_pic: this.profile_pic,
        bio: this.bio,
        verified: this.verified,
      };

      let user = new User(data);
      let response = await user.signUp();
      return response;
    } catch (error) {
      return { message: 'something went wrong' };
    }
  }
  static async login(data) {
    try {
      let username = data.username,
        password = data.password;
      let userData = await User.login(username);
      if (bcrypt.compare(userData.password, password)) {
        let jwt = new Jwt({ username, date: Date.now() });
        let token = jwt.sign();
        return token;
      }
      return { message: 'wrong data' };
    } catch (error) {
      return { message: 'something went wrong' };
    }
  }
  static getUserById(id) {}
  static getAllUsers() {}
  static deleteUser(id) {}
  static updateUser(data) {}
}

module.exports = UserController;
