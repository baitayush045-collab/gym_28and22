const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    membershipName: String, 
    duration: Number,       
    price: Number,
    description: String
}, {
    timestamps: true,
    collection: 'membership_coll'
});

module.exports = mongoose.model('membership_coll', membershipSchema);