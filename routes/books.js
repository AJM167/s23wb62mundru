var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('books', { title: 'Search Results books' });
});

module.exports = router;