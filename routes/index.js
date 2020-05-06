const express = require('express');
const router = express.Router();
const spotControl = require('../controller/spotcontroller');



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

// no routes are hit catchall
// router.use(function (req, res) {
//     res.render()
// })

module.exports = router;