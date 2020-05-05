const db = require("../models");
var express = require('express');
var router = express.Router();
var yelp = require("./yelpController");
console.log(db.Spot);

orm = {
  getAllSpots: function () {
    return db.Spot.findAll().then(function (data) {
      return data
    });
  },
  deleteSpotByName: function (req, res) {
    db.Spot.destroy({ where: { spot_name: req.params.name } }).then(function (dbResponse) {
      res.send('successfully deleted: ' + req.params.name)
    })
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