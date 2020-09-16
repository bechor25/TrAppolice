var express = require('express');
var router = express.Router();

var model = require('../models/product-model');
/*
router.get('/:offset/:limit', function(req, res) {
        let offset = req.params.offset;
        let limit = req.params.limit;
        model.getProducts(offset, limit, function(err, products) {
            if (err) {
                res.json(err)
            } else {
                model.getTotalProducts(function(err, result) {
                    if (err) {
                        res.json(err)
                    } else {
                        res.json({ data: products, total: result[0].total });
                    }
                })
            }
        })
    })
    */
//get report getProductName officer
router.get('/:params1', function(req, res) {
        let params1 = req.params.params1;
        model.getProductName(params1, function(err, products) {
            if (err) {
                res.json(err)
            } else {
                res.json(products);
            }
        })

    })
    //get report getProductIdSearch 
    /*
router.get('/:idSearch', function(req, res) {
        let idSearch = req.params.idSearch;
        model.getProductIdSearch(idSearch, function(err, products) {
            if (err) {
                res.json(err)
            } else {
                res.json(products);
            }
        })

    })
    */
    //get report getProductDate officer
router.get('/:date1/:date2', function(req, res) {
    let date1 = req.params.date1;
    let date2 = req.params.date2;
    model.getProductDate(date1, date2, function(err, products) {
        if (err) {

            res.json(err)
        } else {

            res.json(products);
        }
    })

})


router.get('/', function(req, res) {
    model.getUsur(function(err, result) {
        if (err) {
            res.json(err)
        } else {
            res.json(result);
        }
    })
})

router.get('/:id', function(req, res) {
    let id = req.params.id;
    model.getProduct(id, function(err, result) {
        res.json({ data: result[0], error: err });
    })
})


router.post('/add', function(req, res) {
    model.addProduct(req.body, function(err, result) {
        res.json({ data: result, error: err });
    })
})

router.put('/update', function(req, res) {
    model.updateProduct(req.body, function(err, result) {
        res.json({ data: result, error: err });
    })
})

router.delete('/delete/:id', function(req, res) {
    let id = req.params.id;
    model.deleteProduct(id, function(err, result) {
        res.json({ data: result, error: err });
    })
})

module.exports = router;