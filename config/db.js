const pg = require('pg');
let DsnParser = require('dsn-parser');
const dotenv = require('dotenv');
dotenv.config();
let databaseUrl = process.env.DATABASE_URL;

const { host, port, user, password, database } = new DsnParser(
  databaseUrl
).getParts();
let client = new pg.Pool({
  host,
  port,
  user,
  password,
  database,
  ssl: { rejectUnauthorized: false },
});

module.exports = client;
