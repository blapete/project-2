const db = require("../models");


orm = {
  getAllSpots: function () {
    return db.Spot.findAll().then(function (data) {
      let spotsArr = [];
      for (let i = 0; i < data.length; i++) {
        let newSpot = {
          "id": `${data[i].dataValues.id}`,
          "name": `${data[i].dataValues.spot_name}`,
          "image": `${data[i].dataValues.image}`,
          "rating": `${data[i].dataValues.rating}`,
          "alias": `${data[i].dataValues.alias}`,
          "address": `${data[i].dataValues.address}`,
          "likes": `${data[i].dataValues.likes}`
        }
        spotsArr.push(newSpot);
      };
      return spotsArr;
    });
  }
};

module.exports = orm;
