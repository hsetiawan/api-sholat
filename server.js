var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./service/kelalaian-sholat');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var kelalaianSholatRoutes = require('./routes/kelalaian-sholat');
kelalaianSholatRoutes(app);

app.listen(port);
console.log('api-sholat, RESTful API server started on: ' + port);