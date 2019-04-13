const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/index');
const router = express.Router();

router.post('/', (req, res) => {

  const {
    email,
    senha
  } = req.body;

  console.log(email, senha);

  if ((email === undefined || senha === undefined) || (email === '' || senha === '')) {
    res.status(401).json({
      msg: 'email e/ou senha são inválidos.'
    });
  } else {
    const tokenData = {
      email: 'fulano@email.com',
      senha: '123456',
      admin: true,
    };

    let generationToken = jwt.sign({
      tokenData
    }, config.JWT_KEY, {
        expiresIn: '4m'
      });
    res.json({
      tudoCerto: true,
      token: generationToken
    });
  }
});

module.exports = router;