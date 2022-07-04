const uid = require('uid')
class Id {
  constructor(length) {
    this.length = length;
  }
  generate() {
   return uid.uid(this.length)
  }
}

module.exports = Id;
