var mongoose = require('mongoose');
var User = require('./user');
var ObjectId = mongoose.Schema.ObjectId;


var couponSchema = new mongoose.Schema({
  vendor:  String,
  desc: String,
  owner: {type: ObjectId, ref: 'User'},   
  expire_on: Date,
  created_on: Date, 
  active: Boolean,
  img: String,
  resource_url: String,
  promo_code: String,
  couponType: [String],
  loc: {
    type: [Number],  // [<longitude>, <latitude>]
    index: '2dsphere'      // create the geospatial index
  }
});

module.exports = mongoose.model('Coupon', couponSchema);

