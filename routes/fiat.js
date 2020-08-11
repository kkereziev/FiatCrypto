var express = require('express');
var router = express.Router();
module.exports = router;
const randomNumberInRange = require('../utils/random');

router.get('/:currency', function(req, res, next) {
  const currency = req.params.currency;
  res.json({
    price: getPriceByCurrency(currency.toLowerCase())
  });
});

function getPriceByCurrency(currency) {
  switch(currency) {
    case 'gbp': {
      return randomNumberInRange(70, 80) / 100; // 0.76
    }

    case 'bgn': {
      return randomNumberInRange(165, 178) / 100; //1.73
    }

    case 'eur': {
      return randomNumberInRange(84, 92) / 100; // 0.88
    }

    default: {
      return 0;
    }
  }
}