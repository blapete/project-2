const db = require("../models");


module.exports  = {
    getAllSpots: function(req, res) {
        db.Spot.selectAll(function (data) {
            let hbsObject = {
                db: data
            };
            console.log(hbsObject);
            res.render("index", hbsObject);
        });
    },
    deleteSpotByName: function(req, res) {
        db.Spot.destroy({where:{spot_name: req.params.name}}).then(function(dbResponse) {
            res.send('successfully deleted: '+ req.params.name)
        })
    }

}


router.get("/", function (req, res) {
});

router.post("/api/spot", function(req, res) {
    db.insertOne([
      "spot_name"
    ], [
      req.body.spot_name
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });