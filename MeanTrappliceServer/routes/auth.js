var express = require('express');
var router = express.Router();
var authModel = require('../models/auth-model');
var bcrypt = require('bcrypt');
var passport = require('passport');
var jwt = require('jsonwebtoken');

router.post('/signup', function(req, res) {
    const password = req.body.password;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        req.body.password = hash;
        authModel.signup(req.body, function(err, result) {
            res.json({ data: result, error: err })
        });
    });
});

router.post('/login', function(req, res, next) {
    passport.authenticate('local', { session: false }, function(err, user, info) {

        if (err) { return next(err); }

        if (!user) {
            return res.status(500).json(info.message)
        }

        const payload = {
            username: user.username,
            authorization: user.authorization,
            rank: user.rank,
            first_name: user.first_name,
            last_name: user.last_name
        }
        const options = {
            subject: `${user.id}`,
            expiresIn: 3600
        }
        const token = jwt.sign(payload, 'secret123', options);

        res.json({ token, payload });

    })(req, res, next);
})

module.exports = router;