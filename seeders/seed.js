var yelp = require("../controller/yelpController");
const db = require("../models");

async function enterYelps(spot_name) {
    return await yelp.chicagoSearch(spot_name, function (results) {
        db.Spot.create({
            "spot_name": results.name,
            "image": results.image_url,
            "rating": results.rating,
            "alias": results.categories[0].title,
            "address": results.location.address1,
            "likes": 0
        }).then(function (dbResponse) {
            console.log(`insert of ${spot_name} has succeeded`);
            return true
        }).catch(function (err) {
            console.log(`insert of ${spot_name} has failed`);
            return false
        })
    })
};
const spotArray = ["The Purple Pig"]
async function yelpers() {
    for (var i = 0; i < spotArray.length; i++) {
        await enterYelps(spotArray[i])
    }
};
yelpers();