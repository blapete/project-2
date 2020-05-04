var express = require('express');
var exphbs = require("express-handlebars");
// const bookController = require('./controller/bookController');

const db = require('./models');

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("*" , function(req, res) {
    res.send("Hello PAUL");
})



db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
    console.log('Server listening on: http://localhost:' + PORT);
    });
})


// 

// Create database localSpot_db;

// Use localSpot_db;