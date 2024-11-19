require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 5000;

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle graceful shutdown
const gracefulShutdown = async (signal) => {
    console.log(`Received ${signal}. Closing application...`);
    try {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
        server.close(() => {
            console.log('Server closed');
            process.exit(0); // Exit with success
        });
    } catch (error) {
        console.error('Error during shutdown:', error);
        process.exit(1); // Exit with failure
    }
};

// Listen for termination signals
process.on('SIGINT', () => gracefulShutdown('SIGINT')); // Handle Ctrl+C
process.on('SIGTERM', () => gracefulShutdown('SIGTERM')); // Handle termination signals
