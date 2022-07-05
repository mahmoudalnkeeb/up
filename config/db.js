const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config()
let {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DATABASE_URL,
  DB_PORT
} = process.env
let client = new pg.Pool({
  database: DB_NAME,
  host: DATABASE_URL,
  password: DB_PASS,
  user: DB_USER,
  port: DB_PORT
})

module.exports = client
