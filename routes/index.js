const router = require('express').Router();
const apiRoutes = require('./api');

// data route using /api
router.use('/api', apiRoutes);

// any handlebars routing here
router.route('/')
    .get(function(req, res) {
        res.render('index', data)
    })

// no routes are hit catchall
router.use(function(req, res) {
    res.render()
})

module.exports = router;