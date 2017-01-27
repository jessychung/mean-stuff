const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['vectorleap']);

var secretkey = 'secret';


//get instances
router.get('/vectorleap/:token', function (req, res, next) {

    jwt.verify(req.params.token, secretkey, function(err, decoded) {
        if(!err) {

            let userid = decoded.userId;

            db.vectorleap.find({accountId: userid }, function (err, vectorleap) {
                if(err) {
                    res.send(err);
                }
                res.json(vectorleap);
            })
        }

    });
});

router.get('/vectorleap/get/:id', function (req, res, next) {

    db.vectorleap.findOne({_id: mongojs.ObjectId(req.params.id) }, function (err, vectorleap) {
        if(err) {
            res.send(err);
        }
        res.json(vectorleap);
    })
});


// //create
// router.post('/vectorleap', function (req, res, next) {
//     const vectorleap = req.body;
//     if(!vectorleap ) {
//         res.status(400);
//         res.json({
//             "error": "bad data"
//         });
//     } else {
//         db.vectorleap.save(vectorleap, function (err, vectorleap) {
//             if(err) {
//                 res.send(err);
//             }
//             res.json(vectorleap);
//         });
//     }
// });
//
// //delete
// router.delete('/vectorleap/:id', function (req, res, next) {
//     db.vectorleap.remove({_id: mongojs.ObjectId(req.params.id) }, function (err, vectorleap) {
//         if(err) {
//             res.send(err);
//         }
//         res.json(vectorleap);
//     })
// });
//
// //update
// router.put('/vectorleap/:id', function (req, res, next) {
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
//     db.vectorleap.update({_id: mongojs.ObjectId(req.params.id) }, updateduser, {},function (err, vectorleap) {
//         if(err) {
//             res.send(err);
//         }
//         res.json(vectorleap);
//     })
// });


module.exports = router;