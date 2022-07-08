const pg = require('pg');
const parser = require('pg-connection-string').parse;
const dotenv = require('dotenv');
dotenv.config();
const databaseUrlDev = process.env.DATABASE_URL_DEV;
const databaseUrl= process.env.DATABASE_URL;
const env = process.env.ENV;

let client;

if (env == 'dev') {
  let { host, port, user, password, database } = parser(databaseUrlDev);
  client = new pg.Pool({
    host,
    port,
    user,
    password,
    database,
  });
} else {
  let { host, port, user, password, database } = parser(databaseUrl);
  client = new pg.Pool({
    host,
    port,
    user,
    password,
    database,
    ssl: { rejectUnauthorized: false }
  });
}
module.exports = client;
