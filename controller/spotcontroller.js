const db = require("../models");
var express = require('express');
var router = express.Router();
var yelp = require("./yelpController");
console.log(db.Spot);

orm = {
  getAllSpots: function () {
    return db.Spot.findAll().then(function (data) {
      let newSearch = yelp.chicagoSearch(data[1].dataValues.spot_name);
      // console.log(newSearch);

      // for (let i = 0; i < data.length; i++) {
      //   console.log((data[i].dataValues.id) + " " + data[i].dataValues.spot_name);
      // }
      console.log("working");
      return data
    });
  },




  getAll: function (req, res) {
    router.get("/", function (req, res) {
    })
  },

  postInfo: function (req, res) {
    router.post("/api/spot", function (req, res) {
      db.insertOne([
        "spot_name"
      ], [
        req.body.spot_name
      ], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
      });
    });
  }
}

module.exports = orm;