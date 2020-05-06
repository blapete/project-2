const express = require('express');
const router = express.Router();
const spotControl = require('../controller/spotcontroller');
const db = require("../models");


router.get('/', function (req, res) {
    spotControl.getAllSpots().then(data => {
        // console.log(data)
        res.render("index", { spots: data });
    });
});

router.post('/api/admin312', function (req, res) {
    db.Spot.create(req.body).then(function (dbSpot) {
        res.json(dbSpot);
    });
});

// no routes are hit catchall
// router.use(function (req, res) {
//     res.render()
// })

module.exports = router;