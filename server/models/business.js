let mongoose = require('mongoose');

let BusinessSchema = mongoose.Schema({
    type: String,
    username: String,
    business: String,
    location: {
        type: { type: String },
        coordinates: []
    },
    email: String,
    number: String,
    address: String,
    carModel:String,
    password: String,
    ImageSource: String,
    drivingLicenceNum: String,


});

BusinessSchema.index({ "location.coordinates": "2dsphere" });



module.exports = mongoose.model('business', BusinessSchema);