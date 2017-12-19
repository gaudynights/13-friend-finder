// dependencies
var express = require("express");
var bodyParser=require("body-parser");

// express config
// tell node we are creating and express server
var app=express();

// set initial port
var PORT=process.env.PORT || 3035;

// set up exress app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


// routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// start the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});