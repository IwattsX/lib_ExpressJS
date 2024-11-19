const mongoose = require('mongoose');

/**
 * Starts a staffs schema for table staffs
 */
const staffSchema = new mongoose.Schema({
    ID : { type : String, required : true, unique: true},
    name: { type: String, required: true },
});

module.exports = mongoose.model('Staff', staffSchema);
