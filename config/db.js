const pg = require('pg')
const dotenv = require('dotenv')
dotenv.config()
<<<<<<< HEAD
let databaseUrl = process.env.DATABASE_URL
// let {
//   DB_NAME,
//   DB_USER,
//   DB_PASS,
//   DATABASE_URL,
//   DB_PORT
// } = process.env
// let client = new pg.Pool({
//   database: DB_NAME,
//   host: DATABASE_URL,
//   password: DB_PASS,
//   user: DB_USER,
//   port: DB_PORT
// })
let client = new pg.Pool(databaseUrl)
=======
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
  user: DB_USER,
  port: DB_PORT
})
>>>>>>> 3fa337a209b4d5f91539e5ca0bffd9647a6be8bb

module.exports = client
