const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['accounts']);

var secretkey = 'secret';

//api
router.get('/', (req, res) => {
    res.send('currentuser');
});


router.get('/currentuser/:token', function (req, res, next) {

    jwt.verify(req.params.token, secretkey, function(err, decoded) {
        if(!err) {
            var userid = decoded.userId;

            db.accounts.findOne({_id: mongojs.ObjectId(userid) }, function (err, users) {
                if(err) {
                    res.send(err);
                }
                if(users) {
                    res.json(users);
                } else {
                    res.json({
                        "error": "doesn't match!"
                    });
                }
            })

        } else {

        }
    });





});


module.exports = router;