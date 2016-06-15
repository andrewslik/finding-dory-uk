var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({
        message: 'api endpoint'
    });
});

module.exports = router;
