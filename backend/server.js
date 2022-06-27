const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
dotenv.config();

app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('./routers/router'));

let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
