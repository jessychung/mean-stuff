const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['projects']);

var secretkey = 'secret';


//get all project for each account
router.get('/projects/:token', function (req, res, next) {
    jwt.verify(req.params.token, secretkey, function(err, decoded) {
        if(!err) {

            let userid = decoded.userId;

            db.projects.find({accountId: userid }, function (err, projects) {
                if(err) {
                    res.send(err);
                }
                res.json(projects);
            })
        }
    });

});

//get one
router.get('/projects/view-project/:id', function (req, res, next) {
    db.projects.findOne({_id: mongojs.ObjectId(req.params.id) }, function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});

// //create
// router.post('/projects', function (req, res, next) {
//     const task = req.body;
//     if(!task ) {
//         res.status(400);
//         res.json({
//             "error": "bad data"
//         });
//     } else {
//         db.projects.save(task, function (err, task) {
//             if(err) {
//                 res.send(err);
//             }
//             res.json(task);
//         });
//     }
// });
//
// //delete
// router.delete('/projects/:id', function (req, res, next) {
//     db.projects.remove({_id: mongojs.ObjectId(req.params.id) }, function (err, users) {
//         if(err) {
//             res.send(err);
//         }
//         res.json(users);
//     })
// });

//update
// router.put('/projects/:id', function (req, res, next) {
//
//     const users = req.body;
//     const updateduser = {
//         userAvatar: users.userAvatar,
//         userAvatarColour: users.userAvatarColour,
//         userFname: users.userFname,
//         userLname: users.userLname,
//         userEmail: users.userEmail,
//         userRole: users.userRole
//     };
//
//     db.projects.update({_id: mongojs.ObjectId(req.params.id) }, updateduser, {},function (err, users) {
//         if(err) {
//             res.send(err);
//         }
//         res.json(users);
//     })
// });


module.exports = router;