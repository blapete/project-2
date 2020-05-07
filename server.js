var express = require('express');
var exphbs = require("express-handlebars");
const routes = require('./routes');
const path = require('path');
const db = require('./models');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.static(path.resolve('./public')));
app.use('/public', express.static(path.resolve('./public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

db.sequelize.sync(/*{ force: true }*/).then(function () {
    app.listen(PORT, function () {
        console.log('Server listening on: http://localhost:' + PORT);
    });
});