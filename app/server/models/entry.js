var mongoose = require('mongoose');

var entrySchema = mongoose.Schema({
    booking: String,
    flight: String,
    name: String,
    surname: String,
    email: String,
    phone: String,
    qffn: String,
    subscribe: String,
    created: {
        type: Date,
        default: Date.now
    }
});

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

module.exports = mongoose.model('Entry', entrySchema);
