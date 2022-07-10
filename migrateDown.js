const client = require('./config/db');

async function migrateDb() {
  try {
    let connection = await client.connect();
    let users = 'DROP TABLE IF EXISTS users';
    let posts = 'DROP TABLE IF EXISTS posts';
    let articles = 'DROP TABLE IF EXISTS articles';
    let usersQuery = await connection.query(users);
    let postsQuery = await connection.query(posts);
    let articlesQuery = await connection.query(articles);

    console.log({
      message: 'success',
      usersQuery: usersQuery.rows,
      postsQuery: postsQuery.rows,
      articlesQuery: articlesQuery.rows,
    });
  } catch (error) {
    console.log(new Error(error));
  }
}

migrateDb();
