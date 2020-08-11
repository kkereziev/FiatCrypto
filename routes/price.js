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
    case 'eth': {
      return randomNumberInRange(140,160);
    }

    case 'btc': {
      return randomNumberInRange(3700,4200);
    }

    case 'ae': {
      return randomNumberInRange(1, 10) / 10;
    }

    default: {
      return 0;
    }
  }
}