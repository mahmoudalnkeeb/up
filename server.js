const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const errHandler = require('./middlewares/errHandler');
const router = require('./routers/router');
const app = express();
dotenv.config();

// view engine & static files path
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
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
// err handler
app.use(errHandler);
// start server
let port = process.env.PORT || 4000;
let host = process.env.HOST || 'http://localhost'
app.listen(port, () => {
  console.log(`app is running on ${host}:${port}`);
});
