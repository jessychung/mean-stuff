const express = require('express');
const router = express.Router();

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['accounts']);

//api
router.get('/', (req, res) => {
    res.send('accounts');
});


//get all
router.get('/accounts', function (req, res, next) {
    db.accounts.find(function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});



router.get('/accounts/:accountEmail', function (req, res, next) {
    db.accounts.findOne({accountEmail: req.params.accountEmail }, function (err, users) {
        if(err) {
            res.send(err);
        }
        if(users) {
            res.json({
                "token": "fake token"
            });
        } else {
            res.json({
                "error": "doesn't match!"
            });
        }

    })
});

//get current user by email and password entered at login
router.get('/accounts/:accountEmail/:accountPassword', function (req, res, next) {
    db.accounts.findOne({accountEmail: req.params.accountEmail, accountPassword: req.params.accountPassword }, function (err, users) {
        if(err) {
            res.send(err);
        }
        if(users) {
            res.json({
                "token": "fake token"
            });
        } else {
            res.json({
                "error": "doesn't match!"
            });
        }

    })
});

//create
router.post('/accounts', function (req, res, next) {
    const task = req.body;
    if(!task ) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    } else {
        db.accounts.save(task, function (err, task) {
            if(err) {
                res.send(err);
            }
            res.json(task);
        });
    }
});

//delete
router.delete('/accounts/:id', function (req, res, next) {
    db.accounts.remove({_id: mongojs.ObjectId(req.params.id) }, function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});

//update
router.put('/accounts/:id', function (req, res, next) {

    const users = req.body;
    const updateduser = {
        userAvatar: users.userAvatar,
        userAvatarColour: users.userAvatarColour,
        userFname: users.userFname,
        userLname: users.userLname,
        userEmail: users.userEmail,
        userRole: users.userRole
    };

    db.accounts.update({_id: mongojs.ObjectId(req.params.id) }, updateduser, {},function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});


module.exports = router;