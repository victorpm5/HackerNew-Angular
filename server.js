/**
 * Created by albert on 23/05/16.
 * This file contains all of our server-side code, which implements our REST API.
 * It’s written in Node.js, using the Express framework and the MongoDB Node.js driver.
 */

var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    db = database;
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});

// ---------------------------------------------------------------------------------------------------------------------

// HACKER NEWS API ROUTES BELOW

// MODEL DEFINITIONS

var Submission = mongoose.model('Submission', {
    id: integer,
    title: string,
    url: string,
    text: string,
    user_id: integer,
    created_at: string,
    updated_at: string
})

app.get('/', function (req, res) {
    Submission.find(function(err, submissions) {
        if(err) {
            res.send(err);
        }
        res.json(submissions);
    });
});