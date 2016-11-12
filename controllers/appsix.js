var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource toto');

  res.render('appsix', {title: "appsix"});
});

module.exports = router;
