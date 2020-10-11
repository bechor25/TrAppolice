var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');

require('./passport-config');

var userRemoveRouter = require('./routes/user-remove');
var productCountMoneyRouter = require('./routes/product-countMoney');
var productCountSympolRouter = require('./routes/product-countSympol');
var productDashbordRouter = require('./routes/product-dashbord');
var authRouter = require('./routes/auth');
var productRouter = require('./routes/product');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());



app.use('/auth', authRouter);
app.use('/product', passport.authenticate('jwt', { session: false }), productRouter);
app.use('/product-dashbord', passport.authenticate('jwt', { session: false }), productDashbordRouter);
app.use('/product-countSympol', passport.authenticate('jwt', { session: false }), productCountSympolRouter);
app.use('/product-countMoney', passport.authenticate('jwt', { session: false }), productCountMoneyRouter);
app.use('/user-remove', passport.authenticate('jwt', { session: false }), userRemoveRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;