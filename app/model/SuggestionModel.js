const mongoose = require('mongoose');

// Define the schema for a suggestion
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

const Suggestion = mongoose.models.Suggestion || mongoose.model('Suggestion', suggestionSchema);


module.exports = Suggestion;
