const router = require('express').Router();
const yelpRoutes = require('./yelp');
const spotRoutes = require('./spot');

//im already at /api

// /api/yelp
router.use('/yelp', yelpRoutes);
// /api/spot
router.use('/spot', spotRoutes);

// no routes are hit catchall
router.use(function(req, res) {
    res.send('you cant be here')
})

module.exports = router;