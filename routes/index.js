const express = require('express');
const router = express.Router();
const spotControl = require('../controller/spotcontroller');



// any handlebars routing here
router.route('/')
    .get(function (req, res) {
        var data = { info: [{ info: "this is the info" }] }
        spotControl.getAllSpots().then(data => {
            console.log(data)
            res.render("index", { spots: data });
        })


    })

// no routes are hit catchall
router.use(function (req, res) {
    res.render()
})

module.exports = router;