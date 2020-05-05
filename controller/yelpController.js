let yelp = require("yelp-fusion");
let Spot = require("spotcontroller.js");

var db = require("../models");

module.exports = {
    getInfoByName: function(req, res) {
        // doo yelp fusion
yelp.find(req.params.name).then(spotData => {
    res.json(spotData)
})
        // res.json(spotData)
    }
}


router.get("/", function (req, res) {
    yelp.selectAll(function (data) {
        let hbsObject = {
            spot: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

