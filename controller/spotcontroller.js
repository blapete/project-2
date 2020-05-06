const db = require("../models");
var express = require('express');
var router = express.Router();
var yelp = require("./yelpController");
console.log(db.Spot);

orm = {
  getAllSpots: function () {
    console.log('in this place');
    return db.Spot.findAll().then(function (data) {
      console.log('here');
      console.log(data);
      return data;
    });
  },





}

module.exports = orm;