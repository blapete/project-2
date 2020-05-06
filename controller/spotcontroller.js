const db = require("../models");
var express = require('express');
var router = express.Router();

orm = {
  getAllSpots: function () {
    return db.Spot.findAll().then(function (data) {
      // console.log(`id: ${data[0].dataValues.id}`);
      // console.log(`name: ${data[0].dataValues.spot_name}`);
      // console.log(`image: ${data[0].dataValues.image}`);
      // console.log(`rating: ${data[0].dataValues.rating}`);
      // console.log(`alias: ${data[0].dataValues.alias}`);
      // console.log(`address: ${data[0].dataValues.address}`);
      let spotsArr = [];
      for (let i = 0; i < data.length; i++) {
        let newSpot = {
          "id": `${data[i].dataValues.id}`,
          "name": `${data[i].dataValues.spot_name}`,
          "image": `${data[i].dataValues.image}`,
          "rating": `${data[i].dataValues.rating}`,
          "alias": `${data[i].dataValues.alias}`,
          "address": `${data[i].dataValues.address}`
        }
        spotsArr.push(newSpot);
      }
      // console.log(spotsArr);
      return spotsArr;
    });
  }
}





// getAll: function (req, res) {
//   router.get("/", function (req, res) {
//   })
// },

// postInfo: function (req, res) {
//   router.post("/api/spot", function (req, res) {
//     db.insertOne([
//       "spot_name"
//     ], [
//       req.body.spot_name
//     ], function (result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     });
//   });
// }


module.exports = orm;
