const errHandler = (error, req, res, next) => {
  if (error) {
    console.log(error);
    return res.status(500).send('something went wrong');
  } else {
    console.log('no');
  }
};

module.exports = errHandler;
