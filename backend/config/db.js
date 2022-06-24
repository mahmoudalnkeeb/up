const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config()
let {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT
} = process.env
let client = new pg.Pool({
  database: DB_NAME,
  host: DB_HOST,
  password: DB_PASS,
  user: DB_USER
})

module.exports = client
