const express = require('express');
const router = express.Router();
const spotControl = require('../controller/spotcontroller');
const db = require("../models");


router.get('/', function (req, res) {
    spotControl.getAllSpots().then(data => {
        res.render("index", { spots: data });
    });
});

router.post('/api/admin312', function (req, res) {
    db.Spot.create(req.body).then(function (dbSpot) {
        res.json(dbSpot);
    });
});


router.put("/api/cats/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log(req.body);
    // db.Spot.update({
    //     likes: req.body
    // }, condition, function (result) {
    //     if (result.changedRows == 0) {
    //         // If no rows were changed, then the ID must not exist, so 404
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    // });
});



module.exports = router;