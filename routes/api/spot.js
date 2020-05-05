const router = require('express').Router();
const spotController = require('../../controller/spotcontroller');
const yelpController = require('../../controller/yelpController');

//im already at /api/spot
router.route('/')
    .get(spotController.getAllSpots)
    .post(spotController.addSpot)

router.route('/:name')
    .get(yelpController.getInfoByName)
    .put(spotController.updateSpotByName)
    .delete(spotController.deleteSpotByName);
    
// no routes are hit catchall
router.use(function(req, res) {
    res.send('you cant be here')
})

module.exports = router;