const express = require('express');
const router = express.Router();

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['address']);

//api
router.get('/', (req, res) => {
    res.send('address');
});


router.get('/address/:id', function (req, res, next) {
    db.address.findOne({accountId: req.params.id }, function (err, users) {
        if(err) {
            res.send(err);
        }
        if(users) {
            if(req.headers['authorization'] === 'Bearer fake token') {
                res.json(users);
            } else {
                res.json({
                    "error": "no token"
                });
            }
        } else {
            res.json({
                "error": "doesn't match!"
            });
        }

    })
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