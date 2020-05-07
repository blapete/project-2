$(document).ready(function () {
    console.log("hello");





    $(document).on("submit", "#add-spot", handleSpotFormSubmit);


    function handleSpotFormSubmit(event) {
        var nameInput = $("#spot_name").val();
        var imageInput = $("#image").val();
        var ratingInput = $("#rating").val();
        var aliasInput = $("#alias").val();
        var addressInput = $("#address").val();
        event.preventDefault();

        // Don't do anything if the name fields hasn't been filled out
        if (!nameInput || !imageInput || !ratingInput || !aliasInput || !addressInput) {
            console.log("hi in statement");
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

    function insertSpot(spotData) {
        console.log("Insert Spot");
        $.post("/api/admin312", spotData, function () { console.log('in this thing') }).then(function (data) {
            console.log('in this other')
        })
    }

    // app.post("/api/admin312", function (req, res) {
    //     db.Spot.create(req.body).then(function (dbSpot) {
    //         res.json(dbSpot);
    //     });

    // })




});