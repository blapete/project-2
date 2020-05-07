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


router.put("/api/likes/:id", function (req, res) {
    console.log(req.body);
    console.log(req.body.likes);
    db.Spot.update({
        likes: req.body.likes
    }, { where: { id: req.params.id } }).then(function (result) {
        console.log(`This is the result: ${result}`);
        res.json(result);
    })
});



module.exports = router;