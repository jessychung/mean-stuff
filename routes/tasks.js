const express = require('express');
const router = express.Router();

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['users']);


//get all
router.get('/tasks', function (req, res, next) {
    db.users.find(function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});

//get one
router.get('/task/:id', function (req, res, next) {
    db.users.findOne({_id: mongojs.ObjectId(req.params.id) }, function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});

//save
router.post('/task', function (req, res, next) {
    const task = req.body;
    if(!task.title ) {
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
    };
});

//delete
router.delete('/task/:id', function (req, res, next) {
    db.users.remove({_id: mongojs.ObjectId(req.params.id) }, function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});

//update
router.put('/task/:id', function (req, res, next) {

    const task = req.body;
    const newtask = {};

    db.users.remove({_id: mongojs.ObjectId(req.params.id) }, function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});


module.exports = router;