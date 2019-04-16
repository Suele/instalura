const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('ola timeline');
  res.status(200).json({
    message: 'timeline de news',
  });
});

module.exports = router;