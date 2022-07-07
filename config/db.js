const pg = require('pg');
let parser = require('pg-connection-string').parse;
const dotenv = require('dotenv');
dotenv.config();
let databaseUrl = process.env.DATABASE_URL;

const { host, port, user, password, database } = parser(databaseUrl);
let client = new pg.Pool({
  host,
  port,
  user,
  password,
  database,
  ssl: { rejectUnauthorized: false },
});
module.exports = client;
