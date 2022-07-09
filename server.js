const express = require('express');
const dotenv = require('dotenv');
const app = express();
const path = require('path')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const errHandler = require('./middlewares/errHandler');
dotenv.config();

app.set('view engine' , 'ejs')
app.use(express.static(path.join(__dirname , 'public')))
app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({ extended: false, type: '*/x-www-form-urlencoded' })
);

app.use(require('./routers/router'));
app.use(errHandler);
let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`app is running on http://localhost:${port}`);
});
