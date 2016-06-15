var express = require('express');
var csv = require('express-csv');

var Entry = require('../models/entry');
var notificationService = require('../services/notifications');

var router = express.Router();
var exportKey = "1b2756712b5e089a8125fcf30f03fef3";

router.get('/', function (req, res) {
    res.json({
        message: 'api endpoint'
    });
});

router.get('/export/:key', function (req, res) {

    if (req.params.key != exportKey) {

        res.json({
            message: 'incorrect key'
        });

        return;

    } else {
        Entry.find().exec(function (err, entries) {

            var csvData = [];

            for (i = 0; i < entries.length; i++) {
                csvData.push({
                    booking: entries[i].booking,
                    flight: entries[i].flight,
                    name: entries[i].name,
                    surname: entries[i].surname,
                    email: entries[i].email,
                    phone: entries[i].phone,
                    qffn: entries[i].qffn,
                    subscribe: entries[i].subscribe
                });
            }


            res.csv(
                csvData
            );
        });
    }

});

router.post('/', function (req, res) {

    req.assert('booking', 'Booking reference is required').notEmpty();
    req.assert('flight', 'Flight number is required').notEmpty();
    //req.assert('departure', 'A departure point is required').notEmpty();
    // req.assert('arrival', 'A arrival point is required').notEmpty();
    req.assert('name', 'A name is required').notEmpty();
    req.assert('surname', 'A surname is required').notEmpty();
    req.assert('email', 'Email is required').isEmail();
    req.assert('phone', 'Phone is required').notEmpty();
    //req.assert('qffn', 'Frequent flyer number is required').notEmpty();
    //req.assert('subscribe', 'Answer is required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        console.log(errors);

        res.json({
            error: true,
            success: false,
            errors: errors
        });
    } else {

        var e = new Entry();
        e.booking = req.body.booking;
        e.flight = req.body.flight;
        e.name = req.body.name;
        e.surname = req.body.surname;
        e.email = req.body.email;
        e.phone = req.body.phone;
        e.qffn = req.body.qffn;
        e.subscribe = req.body.subscribe;

        e.save(function (err) {

            if (err) {
                res.json({
                    error: true,
                    success: false,
                    errors: 'Query error'
                });

                //notificationService.notifyAdmin(e);
            } else {
                res.json({
                    error: false,
                    success: true
                });

                //notificationService.notifyEntry(e);
            }

        });
    }

});

module.exports = router;
