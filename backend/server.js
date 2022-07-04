const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errHandler = require('./middlewares/errHandler');
const Id = require('./utils/genId');
dotenv.config();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ extended: false, type: '*/x-www-form-urlencoded' })
);
let id = new Id(16);
app.use(require('./routers/router'));
app.use(errHandler);
let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
