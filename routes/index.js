const express = require('express');
const router = express.Router();
const spotControl = require('../controller/spotcontroller');
const db = require("../models");



// any handlebars routing here
// var data = { info: [{ info: "this is the info" }] }
router.route('/')
    .get(function (req, res) {

        spotControl.getAllSpots().then(data => {
            console.log(data)
            res.render("index", { spots: data });
        })
    })

router.route('/favorites')
    .get(function (req, res) {
        // var data = { info: [{ info: "this is the info" }] }
        // spotControl.getAllFaveSpots().then(data => {
        // console.log(data)
        res.render("favorites"
            // , { spots: data }
        );
        // })
    })

router.route('/admin312')
    .get(function (req, res) {
        res.render("admin");
    })

router.post('/api/admin312', function(req, res) {
    db.Spot.create(req.body).then(function(dbSpot) {
      res.json(dbSpot);
    });
});

// no routes are hit catchall
// router.use(function (req, res) {
//     res.render()
// })

module.exports = router;