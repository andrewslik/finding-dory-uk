var express = require('express');
var MobileDetect = require('mobile-detect')
var router = express.Router();


router.get('/', function(req, res) {
    res.render('index', {
        title: "Qantas - Finding Dory - Competition"
    });
});

router.post('/', function(req, res) {
    res.render('index', {
        title: "Qantas - Finding Dory - Competition"
    });
});

module.exports = router;
