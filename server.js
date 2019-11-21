var bodyParser = require('body-parser');
const express = require('express');
var path = require('path');


const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/public'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
// parse application/json
app.use(bodyParser.json());

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function(){

    console.log("App is listening on PORT: " + PORT)
});