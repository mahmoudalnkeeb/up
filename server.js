const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const errHandler = require('./middlewares/errHandler');
const router = require('./routers/mainRouter');
const secRouter = require('./routers/secRouter');
const app = express();
const app2 = express();
dotenv.config();

// server env vars
const env = process.env.ENV;
const port = process.env.PORT || 4000;
const host = process.env.HOST || 'http://localhost';
const host2 = process.env.HOST2 || 'http://localhost2';

// view engine & static files path
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app2.set('view engine', 'ejs');
app2.use(express.static(path.join(__dirname, 'public')));

// middlewares
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: '*',
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);
app2.use(secRouter);

// err handler
app.use(errHandler);

// if enviroment = development start second app on local network
let server;
if (env === 'dev') {
  server = app.listen(port, host, () => {
    console.log(`main app is running on http://${host}:${port}`);
  });
  app2.listen(port, host2, () => {
    console.log(`secondary app is running on http://${host2}:${port}`);
  });
} else {
  app.use(secRouter);
  server = app.listen(port, () => {
    console.log(`app is running on ${port}`);
  });
}
