const express = require('express');
const router = express.Router();

console.log('ola');

router.get('/', (req, res) => {
  console.log('ola timeline');
  res.status(200).json({
    message: 'timeline de news',
  });
});

console.log('ola outra vez.');

module.exports = router;