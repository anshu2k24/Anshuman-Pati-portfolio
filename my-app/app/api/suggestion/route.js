// This API route handles suggestion submissions. It checks for exact duplicate
// submissions to prevent redundant data entries.

// We need to import NextResponse from 'next/server' for handling responses.
import { NextResponse } from 'next/server';
// Import the database connection helper. The path is adjusted to go up
// three directories from `app/api/suggestion/route.js` to reach the `lib` folder.
import { dbConnect } from '../../lib/dbConnect';

// These imports are assumed to exist in your Next.js project.
// You will need to create the Mongoose model and the email service function.
// For example: `models/SuggestionModel.js` and `services/emailService.js`
import Suggestion from '../../model/SuggestionModel';
import { sendSuggestionNotification } from '../../services/emailService';

/**
 * Handles the POST request for suggestion submissions.
 * @param {Request} req The incoming request object.
 * @returns {NextResponse} The response object.
 */
export async function POST(req) {
    try {
        // Connect to the database before any operations.
        await dbConnect();

        // Parse the JSON body from the request.
        const { suggested, name } = await req.json();

        // --- 1. Check if an exact duplicate suggestion already exists ---
        // This query finds a document with the exact same suggestion text and name.
        const existingSuggestion = await Suggestion.findOne({
            suggested: suggested,
            name: name,
        });

        if (existingSuggestion) {
            // Return a 409 Conflict status if a duplicate is found.
            return NextResponse.json({
                message: 'A duplicate suggestion with this exact information already exists.',
            }, { status: 409 });
        }

        // --- 2. Create and save the new suggestion document ---
        const newSuggestion = new Suggestion({
            suggested,
            name,
        });

        await newSuggestion.save();

        // --- 3. Send notification email (non-blocking) ---
        // Using .catch() to handle potential errors without blocking the main response.
        sendSuggestionNotification(newSuggestion).catch(err => console.error("Failed to send suggestion notification email:", err));

        // --- 4. Return success response ---
        // Return a 201 Created status for a successful submission.
        return NextResponse.json({
            message: "Suggestion submitted successfully.",
        }, { status: 201 });

    } catch (error) {
        // Handle validation errors or other database errors.
        // Return a 400 Bad Request status for any errors.
        return NextResponse.json({
            message: 'Failed to submit suggestion.',
            error: error.message,
        }, { status: 400 });
    }
}
