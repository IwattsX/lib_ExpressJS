const mongoose = require('mongoose');

/**
 * Starts the members schema for table members
 */
const memberSchema = new mongoose.Schema({
    ID : { type : String, required : true, unique : true},
    name: { type: String, required: true },
});

module.exports = mongoose.model('Member', memberSchema);
