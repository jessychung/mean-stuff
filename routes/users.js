const express = require('express');
const router = express.Router();

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['users']);

//api
router.get('/', (req, res) => {
    res.send('api works');
});


//get all
router.get('/users', function (req, res, next) {
    db.users.find(function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
        console.log('testing!');
    })
});

//get one
router.get('/users/:id', function (req, res, next) {
    db.users.findOne({_id: mongojs.ObjectId(req.params.id) }, function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});

//create
router.post('/users', function (req, res, next) {
    const task = req.body;
    if(!task ) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    } else {
        db.users.save(task, function (err, task) {
            if(err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

//delete
router.delete('/users/:id', function (req, res, next) {
    db.users.remove({_id: mongojs.ObjectId(req.params.id) }, function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});

//update
router.put('/users/:id', function (req, res, next) {

    const users = req.body;
    const updateduser = {
        userAvatar: users.userAvatar,
        userAvatarColour: users.userAvatarColour,
        userFname: users.userFname,
        userLname: users.userLname,
        userEmail: users.userEmail,
        userRole: users.userRole
    };

    db.users.update({_id: mongojs.ObjectId(req.params.id) }, updateduser, {},function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});


module.exports = router;