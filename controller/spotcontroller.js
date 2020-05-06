const db = require("../models");
var express = require('express');
var router = express.Router();
var yelp = require("./yelpController");

orm = {
  getAllSpots: function () { }
  // return db.Spot.findAll().then(function (data) {
  //   let spotsArr = [];
  //   for (let i = 0; i < data.length; i++) {
  //     spotsArr.push(data[i].dataValues.spot_name)
  //   };
  //   console.log(spotsArr);
  //   let yelpArr = [];
  //   var x = spotsArr[1];
  //   yelp.chicagoSearch(x, function (results) {
  //     console.log("info: ", results);
  //     yelpArr.push({
  //       "name": results.name,
  //       "image": results.image_url,
  //       "rating": results.rating,
  //       "alias": results.categories[0].title,
  //       "address": results.location.address1
  //     });
  //     console.log(`yelp arr is:\n${JSON.stringify(yelpArr, null, 2)}`);
  //   });
  // let neverMore = data[1].dataValues.spot_name;
  // let newSearch = yelp.chicagoSearch(neverMore, function (results) {
  //   console.log("name: ", results.name);
  //   console.log("image: ", results.image_url);
  //   console.log("rating: ", results.rating);
  //   console.log("alias: ", results.categories[0].title);
  //   console.log("address: ", results.location.address1);
  // });


  // console.log("working");
  // return spotsArr;

};





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


// let newYelp = data;
// console.log(`this is the data ${data}`);
// console.log(`THis is the data name: ${data.name}`);
// console.log("Here:", newYelp);
