const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('../config/index.js');

// rota para enviar dados para o servidor.
router.post('/login', (req, res) => {
  const {
    email,
    senha
  } = req.body.userDate;

  if ((email === undefined || senha === undefined) || (email === '' || senha === '')) {
    res.status(401).json({
      msg: 'email e/ou senha são invalidos.'
    });
  } else {
    const tokenData = {
      email:'fulano@email.com',
      senha: '123456',
      admin: true,
    }

    let generationToken = jwt.sign(tokenData, config.JWT_KEY, {expiresIn: '1m'});
    res.json({
      tudoCerto: true,
      token: generationToken
    })
  }
});

module.exports = router;