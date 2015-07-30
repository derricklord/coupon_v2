//Load Userland npm Modules
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var errorHandler = require('errorhandler');
var mongoose = require('mongoose');
var multer = require('multer');
var path = require('path');
var async = require('async');
var request = require('request');

var util = require('./server/util/lib.js');
var config = require('./server/config');


//Load Custom Models 
var Coupon = require('./server/models/coupon');           //V1 API Coupon Model
var User = require('./server/models/user');       //V1 API User Model

//Load Custom Routes
var couponRoutes = require('./server/routes/coupons');     // V1 API Coupon Routes
var userRoutes = require('./server/routes/users');   // V1 API User Routes
var authRoutes = require('./server/routes/auth');
var rootRoutes = require('./server/routes/root');


//Initialize Server
var app = express();
var port = process.env.PORT || 3000;

//Initialize Database
mongoose.connect(config.MONGO_URI_LAB);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

//Configure Server Environment
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'client')));
        

//Configure Routes
app.use('/auth', authRoutes);
app.use('/api/coupons', couponRoutes);
app.use('/api/user', userRoutes);
app.use('/', rootRoutes);


app.get('*', function(req, res) {
  res.redirect('/#' + req.originalUrl);
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.send(500, { message: err.message });
});

app.listen(port, function(){
    console.log('Server listening on port ' + port);
});

