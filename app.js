const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const bodyParser = require('body-parser');
const mongojs = require('mongojs');

var jwt = require('jwt-simple');

const users = require('./routes/users');
const accounts = require('./routes/accounts');


//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static folder
app.use(express.static(path.join(__dirname, '/')));

//routing
app.use('/api', users);
app.use('/api', accounts);

//run angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


//set jwt

app.set('jwtTokenSecret', 'coffeeANDdonuts');

//connect to mlab
// MongoClient.connect('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', function (err, db) {
//     if (err) throw err;
//
//     db.collection('users').find().toArray(function (err, result) {
//         if (err) throw err;
//         console.log(result);
//     })
// });

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
    console.log(`app started on port ${port}!`);
});