const pg = require('pg');
const dotenv = require('dotenv');
dotenv.config();
let databaseUrl = process.env.DATABASE_URL;

let client = new pg.Pool(databaseUrl);

module.exports = client;
