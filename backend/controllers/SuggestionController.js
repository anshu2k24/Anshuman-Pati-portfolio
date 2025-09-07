const Suggestion = require('../model/SuggestionModel');
const {sendSuggestionNotification} = require('../services/emailService');

// Controller function for handling suggestion submissions
const submitSuggestion = async (req, res) => {
    try {
        // Destructure the required fields from the request body
        const { suggested, name } = req.body;

        // Check if an exact duplicate suggestion already exists
        const existingSuggestion = await Suggestion.findOne({
            suggested: suggested,
            name: name,
        });

        if (existingSuggestion) {
            return res.status(409).json({
                message: 'A duplicate suggestion with this exact information already exists.',
            });
        }

        // Create a new suggestion document with the received data
        const newSuggestion = new Suggestion({
            suggested,
            name,
        });

        // Save the new suggestion document to the database
        await newSuggestion.save();

        // Send notification
        sendSuggestionNotification(newSuggestion).catch(err => console.error(err));

        // Send a success response
        res.status(201).json("Suggestion submitted successfully.");

    } catch (error) {
        // Handle validation errors or other database errors
        res.status(400).json({
            message: 'Failed to submit suggestion.',
            error: error.message,
        });
    }
};

module.exports = {
    submitSuggestion,
};
