const express = require('express');
const router = express.Router();

const mongojs = require('mongojs');
const db = mongojs('mongodb://jessy:123@ds133328.mlab.com:33328/testwhatever', ['accounts']);

//api
router.get('/', (req, res) => {
    res.send('currentuser');
});


router.get('/currentuser/:accountEmail', function (req, res, next) {
    db.accounts.findOne({accountEmail: req.params.accountEmail }, function (err, users) {
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
});


module.exports = router;