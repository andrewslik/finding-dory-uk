var smtpconfig = require('../config/smtp.js');

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transport = nodemailer.createTransport(smtpTransport({
    host: 'smtp.mandrillapp.com',
    port: 25,
    service: "Mandrill",
    auth: {
        user: smtpconfig.user,
        pass: smtpconfig.password
    }
}));

var service = {};

service.notifyEntry = function(entry){

    var html = "";
    html += entry.firstname + " " + entry.lastname + " has entered the competition";
    html += "<br/><br/>";
    html += "<ul>";
    html += "<li>email:" + entry.email + "</li>";
    html += "<li>phone:" + entry.phone + "</li>";
    html += "<li>postcode:" + entry.postcode + "</li>";
    html += "<li>url:" + entry.url + "</li>";
    html += "</ul>";

    var mail = {
        to: smtpconfig.email,
        from: 'mailer@slik.com.au',
        subject: 'New Entry',
        html: html
    };

    transport.sendMail(mail, function (err, json) {
        if (err) {
            console.error(err);
        }
        console.log(json);
    });
}

service.notifyAdmin = function(error){

    var mail = new sendgrid.Email({
        to: smtpconfig.admin,
        from: 'mailer@slik.com.au',
        subject: 'Issue',
        html: error
    });

    sendgrid.send(mail, function (err, json) {
        if (err) {
            console.error(err);
        }
        console.log(json);
    });
}

module.exports = service;
