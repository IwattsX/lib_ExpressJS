const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    id : { type : String, required : true, unique: true},
    name: { type: String, required: true },
});

module.exports = mongoose.model('Staff', staffSchema);
