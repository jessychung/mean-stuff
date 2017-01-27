const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const bodyParser = require('body-parser');
const mongojs = require('mongojs');


const users = require('./routes/users');
const accounts = require('./routes/accounts');
const currentuser = require('./routes/currentuser');
const address = require('./routes/addresses');
const projects = require('./routes/projects');
const timesheets = require('./routes/timesheets');
const vectorleap = require('./routes/vectorleap');

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static folder
app.use(express.static(path.join(__dirname, '/')));

//routing
app.use('/api', users);
app.use('/api', accounts);
app.use('/api', currentuser);
app.use('/api', address);
app.use('/api', projects);
app.use('/api', timesheets);
app.use('/api', vectorleap);

//run angular
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, function () {
    console.log(`app started on port ${port}!`);
});