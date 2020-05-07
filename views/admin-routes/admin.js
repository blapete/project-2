$(document).ready(function () {
    console.log("hello");





    $(document).on("click", "#add-button", handleSpotFormSubmit);


    function handleSpotFormSubmit(event) {
        event.preventDefault();
        var nameInput = $("#spot_name").val();
        var imageInput = $("#image").val();
        var ratingInput = $("#rating").val();
        var aliasInput = $("#alias").val();
        var addressInput = $("#address").val();
        var likesInput = $("#likes").val();


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
            address: addressInput,
            likes: likesInput
        });
    }

    function insertSpot(spotData) {
        console.log("Insert Spot");
        $.post("/api/admin312", spotData, function (data) {
            location.reload();
        })
    }

    // app.post("/api/admin312", function (req, res) {
    //     db.Spot.create(req.body).then(function (dbSpot) {
    //         res.json(dbSpot);
    //     });

    // })




});
