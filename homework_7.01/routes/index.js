var express = require('express');
var router = express.Router();


router.get('/', async function (req, res, next) {
  res.render('index');
});

router.get('/transformer', function(req, res) {
  res.render('transformer', {
    title: 'transformer'
  })
});

router.get('/lira', function(req, res) {
  res.render('lira', {
    title: 'lira'
  })
});

router.get('/hlopushka', function (req, res) {
  res.render('hlopushka', {
    title: 'hlopushka'
  })
});

router.get('/catalog', function (req, res) {
  res.render('catalog', {
    title: 'catalog'
  })
});

module.exports = router;