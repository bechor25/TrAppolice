var express = require('express');
var router = express.Router();

var model = require('../models/product-model');

router.get('/', function(req, res) {
    model.getCountMoney(function(err, result) {
        if (err) {
            res.json(err)
        } else {

            res.json({ total: result });
        }
    })
})

module.exports = router;