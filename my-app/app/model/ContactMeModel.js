// This Mongoose schema defines the structure for contact form submissions.
// It includes validation to ensure data integrity.

import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        // Basic regex for email validation.
        match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    msg: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: false,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Mongoose model from the schema.
// This will be available as 'Contact' in your MongoDB database.
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
