const express = require('express');
const bodyParser = require('body-parser');
const routerLogin = require('./routes/login');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', routerLogin);


app.listen(3001, () => {
  console.log('servidor rodando');
});
