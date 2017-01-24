const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['address']);

var secretkey = 'secret';

//api
router.get('/', (req, res) => {
    res.send('address');
});


router.get('/address/:token', function (req, res, next) {


    jwt.verify(req.params.token, secretkey, function(err, decoded) {
        if(!err) {

            let userid = decoded.userId;

            db.address.findOne({accountId: userid }, function (err, users) {
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
        }

    });

});

router.put('/address/:id', function (req, res, next) {

    const updatedaddress = req.body;

    db.address.update({accountId: req.params.id }, updatedaddress, {},function (err, users) {
        if(err) {
            res.send(err);
        }
        res.json(users);
    })
});


module.exports = router;