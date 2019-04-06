const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const config = require('./config/index');
const router = express.Router();
const app = express();

app.listen(3001, () => {
  console.log('servidor rodando');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const login = router.post('/', (req, res) => {

  const {
    email,
    senha
  } = req.body;

  console.log(email, senha)

  if ((email === undefined || senha === undefined) || (email === '' || senha === '')) {
    res.status(401).json({
      msg: 'email e/ou senha são inválidos.'
    });
  } else {
    const tokenData = {
      email: 'fulano@email.com',
      senha: '123456',
      admin: true,
    }

    let generationToken = jwt.sign({
      tokenData
    }, config.JWT_KEY, {
      expiresIn: '1m'
    });
    res.json({
      tudoCerto: true,
      token: generationToken
    })
  }
});

app.use('/', login);


module.exports = router;