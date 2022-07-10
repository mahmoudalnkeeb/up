const bcrypt = require('../utils/bcrypt');
const User = require('../models/user');
const user = new User();
const Jwt = require('../utils/jwt');
const Id = require('../utils/genId');
class UserController {
  async signUp(data) {
    let newData = {
      id: new Id(16).generate(),
      fname: data.fname,
      lname: data.lname,
      username: data.username,
      password: bcrypt.hash(data.password),
      email: data.email,
      phone: data.phone,
      dob: data.dob,
      gender: data.gender,
      country: data.country,
      profile_pic: data.profile_pic,
      bio: data.bio,
    };
    await user.signUp(newData);
    return { message: 'created successfully' };
  }

  async login(data) {
    let username = data.username,
      password = data.password;
    let userData = await user.login(username);
    if (bcrypt.compare(userData.password, password)) {
      let jwt = new Jwt(userData.id, userData.username, Date.now());
      let token = jwt.sign();
      return token;
    }
    return { message: 'wrong data' };
  }

  async getuserById(id) {
    let userData = await user.getuserById(id);
    return userData;
  }

  async follow(id, follow_id) {
    let followUser = await user.follow(id, follow_id);
    return followUser;
  }

  async unfollow(id, unfollow_id) {
    let unfollowUser = await user.unfollow(id, unfollow_id);
    return unfollowUser;
  }

  async updateName(fname, lname, pass, id) {
    let userPass = await user.getPass(id);
    let hashedPass = await userPass.password;
    if (bcrypt.compare(hashedPass, pass)) {
      return await user.updateName(fname, lname, id);
    } else {
      return { message: 'wrong password' };
    }
  }

  async updatePass(oldPass, newPass, id) {
    let userPass = await user.getPass(id);
    let hashedPass = await userPass.password;
    if (bcrypt.compare(hashedPass, oldPass)) {
      let newPassword = bcrypt.hash(newPass);
      let pass = await user.updatePass(id, newPassword);
      return pass;
    } else {
      return { message: 'wrong password' };
    }
  }

  async updatePhoto(newPhoto, id) {}

  async updateBio(newBio, id) {}

  async deleteUser(id, password) {
    let userPass = await user.getPass(id);
    let hashedPass = await userPass.password;
    if (bcrypt.compare(hashedPass, password)) {
      let res = await user.delete(id, password);
      return res;
    } else {
      return { message: 'wrong password' };
    }
  }
}

module.exports = UserController;
