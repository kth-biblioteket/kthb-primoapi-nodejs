let config = require('./configs/config');

let express = require('express')
var bodyParser = require("body-parser");
var sqlinjection = require('sql-injection');

let app = express();

let apiRoutes = require("./routes/api-routes");
app.use(bodyParser.urlencoded({ 
    extended: true 
}));
app.use(bodyParser.json());

app.use(sqlinjection);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization");
    next();
});
  
app.use(config.apiroot, apiRoutes);

var port = config.port
var server = app.listen(port, function () {
    console.log("App now running on port", port);
});


