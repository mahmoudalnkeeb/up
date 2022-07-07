const path = require('path')
let root = process.cwd()
let uploadsPath = path.resolve(path.join(root , '/uploads'))
const multer = require('multer');

const upload = multer({dest:uploadsPath});


module.exports = upload