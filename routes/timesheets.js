const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['timesheets']);

var secretkey = 'secret';


//get all timesheets for each project
router.get('/timesheets/:id', function (req, res, next) {

    db.timesheets.find({projectId: req.params.id }, function (err, timesheets) {
        if(err) {
            res.send(err);
        }
        res.json(timesheets);
    })

});

//get one
// router.get('/timesheets/view-project/:id', function (req, res, next) {
//     db.projects.findOne({_id: mongojs.ObjectId(req.params.id) }, function (err, timesheets) {
//         if(err) {
//             res.send(err);
//         }
//         res.json(timesheets);
//     })
// });


module.exports = router;