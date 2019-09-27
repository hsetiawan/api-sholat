'use strict';

var response = require('../util/response');
var connection = require('../config/connection');
var baseModel = require('../util/base_model');

exports.list = function(req, res) {
    connection.query('SELECT * FROM negligence', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.create = function(req, res) {
    var title = req.body.title;
    var description = req.body.description;

    connection.query('INSERT INTO negligence (title, description) values (?,?)',
     [title, description],
     function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};