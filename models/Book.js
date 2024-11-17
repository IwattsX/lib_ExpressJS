const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: {
        type: String,
        enum: ['fiction', 'non-fiction'],
        required: true,
    },
    year: { type: Number, required: true },
});

module.exports = mongoose.model('Book', bookSchema);
