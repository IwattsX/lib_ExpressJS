const mongoose = require('mongoose');

/**
 * Creates a ORM schema for tables books
 */
const bookSchema = new mongoose.Schema({
    ISBN : {type : String, required: true, unique : true},
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
        type: String,
        enum: ['fiction', 'non-fiction'],
        required: true,
    },
    is_checked_out : { type : Boolean, required: true},
});

module.exports = mongoose.model('Book', bookSchema);
