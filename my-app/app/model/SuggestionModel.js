// This Mongoose schema defines the structure for a suggestion.

import mongoose from 'mongoose';

const suggestionSchema = new mongoose.Schema({
    // The main suggestion text provided by the user
    suggested: {
        type: String,
        required: true,
        trim: true,
        minlength: 1, // A minimum length for the suggestion
    },
    // The name of the person who gave the suggestion
    name: {
        type: String,
        required: true,
        trim: true,
    },
    // Automatically adds a timestamp for when the suggestion was created
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

// Create the Mongoose model from the schema, or reuse it if it already exists
// to prevent Mongoose from trying to overwrite the model in development.
const Suggestion = mongoose.models.Suggestion || mongoose.model('Suggestion', suggestionSchema);

export default Suggestion;
