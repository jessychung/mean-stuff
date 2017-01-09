const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const bodyParser = require('body-parser');
const mongojs = require('mongojs');

const index = require('./routes/index');
const tasks = require('./routes/tasks');


const port = 3000;


//set static folder
app.use(express.static(path.join(__dirname, '/')));

//run angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//routing
app.use('/api', tasks);

//connect to mlab
// MongoClient.connect('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', function (err, db) {
//     if (err) throw err;
//
//     db.collection('users').find().toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
// });


app.listen(port, function () {
    console.log(`app started on port ${port}!`);
});