// This file connects to the MongoDB database and reuses the connection
// to avoid performance issues in a serverless environment like Next.js.

import mongoose from 'mongoose';

// A cached connection variable to hold the database connection.
// This is crucial for avoiding multiple connections in development and
// within serverless functions.
let cachedConnection = null;

/**
 * Establishes a connection to the MongoDB database.
 * If a connection already exists, it is reused. Otherwise, a new connection is created.
 * @returns {Promise<mongoose.Connection>} The mongoose connection object.
 */
export async function dbConnect() {
    // Check if we already have a connection to the database.
    if (cachedConnection) {
        console.log("Using existing MongoDB connection.");
        return cachedConnection;
    }

    // Check for the MongoDB URI environment variable.
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
    }

    // Connect to the database using the URI.
    try {
        const db = await mongoose.connect(uri);
        console.log("New MongoDB connection established successfully! ✅");

        // Cache the connection for future use.
        cachedConnection = db.connection;
        return cachedConnection;

    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw error;
    }
}