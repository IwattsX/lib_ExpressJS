const mongoose = require('mongoose');

console.log(`MONGOOSE MONGO_URI = ${process.env.MONGO_URI}`)

/**
 * Connects to the MongoDB database
 */
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/library", {
            // options
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;

