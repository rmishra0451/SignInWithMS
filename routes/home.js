var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res) {
  let params = {
    active: { home: true }
  };

  res.render('index', params);
});

module.exports = router;
