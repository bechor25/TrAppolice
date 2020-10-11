var express = require('express');
var router = express.Router();

var model = require('../models/user-model');

router.put('/update', function(req, res) {
    model.updateUser(req.body, function(err, result) {
        res.json({ data: result, error: err });
    })
})

router.delete('/delete/:id_rank', function(req, res) {
    let id_rank = req.params.id_rank;
    model.deleteUser(id_rank, function(err, result) {
        res.json({ data: result, error: err });
    })
})

module.exports = router;