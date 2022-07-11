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

// view engine & static files path
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app2.set('view engine', 'ejs');
app2.use(express.static(path.join(__dirname, 'public')));
// middlewares
app.use(
  bodyParser.urlencoded({ extended: false, type: '*/x-www-form-urlencoded' })
);
// cross origins
let origins = process.env.ORIGINS.split(';');
app.use(
  cors({
    origin: origins,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(router);
app2.use(secRouter);
// err handler
app.use(errHandler);
// start server
let port = process.env.PORT || 4000;
let host = process.env.HOST || 'http://localhost';
let host2 = process.env.HOST2 || 'http://localhost';

if (ENV == 'dev') {
  app.listen(port, host, () => {
    console.log(`app is running on http://${host}:${port}`);
  });
  app2.listen(port, host2, () => {
    console.log(`app is running on http://${host2}:${port}`);
  });
} else {
  app.listen(port, () => {
    console.log(`app is running on http://${host}:${port}`);
  });
}
