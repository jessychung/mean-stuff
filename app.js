const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
var mongojs = require('mongojs');
var MongoClient = require('mongodb').MongoClient;

// var dbpath = mongojs('mongodb://jessyc:123456@ds133328.mlab.com:33328/testwhatever',['users']);

//run angular

app.use(express.static(path.join(__dirname, '/')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//connect to mlab

MongoClient.connect('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', function (err, db) {
    if (err) throw err;

    db.collection('users').find().toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
    })
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});