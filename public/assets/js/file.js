$(document).ready(function () {

    var nameInput = $("#spot_name");
    var imageInput = $("#image");
    var ratingInput = $("#rating");
    var aliasInput = $("#alias");
    var addressInput = $("#address");
    $(document).on("submit", "#add-spot", handleSpotFormSubmit);





    

        function handleSpotFormSubmit(event) {
            event.preventDefault();
            console.log("hello");
            // Don't do anything if the name fields hasn't been filled out
            if (!nameInput || !imageInput || !ratingInput || !aliasInput || addressInput) {
                return;
            }
            // Calling the Insert function and passing in the value of the name input
            insertSpot({
                spot_name: nameInput,
                image: imageInput,
                rating: ratingInput,
                alias: aliasInput,
                address: addressInput
            });
        }


        app.post("/api/admin312", function (req, res) {
            db.Spot.create(req.body).then(function (dbSpot) {
                res.json(dbSpot);
            });

        })
    })