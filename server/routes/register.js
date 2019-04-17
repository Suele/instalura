const express = require("express");
const router = express.Router();
const db = require("../db/index");

router.get("/", (req, res) => {
  res.status(200).json({
    message: "teste get do register."
  });
});

router.post("/", (req, res) => {
  const { nome, sobrenome, email, password } = req.body.userData;

  const userNewData = {
    nome,
    sobrenome,
    email,
    password
  };

  const handler = (err, result) => {
    if (!err) {
      res.status(201).json({
        userData: result,
        status: 201,
        message: "created register sucess"
      });
    } else {
      res.status(404).json({
        userData: result,
        status: 404,
        message: "Not Found"
      });
    }
  };

  db.register(userNewData, handler);
});

module.exports = router;
