// This API route handles contact form submissions. It checks for duplicate
// submissions and enforces a cooldown period to prevent spam.

// We need to import NextResponse from 'next/server' for handling responses.
import { NextResponse } from 'next/server';

// These imports are assumed to exist in your Next.js project.
// You will need to create the Mongoose model and the email service functions
// in the appropriate locations within your project structure.
// For example: `models/ContactMeModel.js` and `services/emailService.js`
import Contact from './models/ContactMeModel';
import { sendContactNotification, sendThankYouEmail } from './services/emailService';

/**
 * Handles the POST request for contact form submissions.
 * @param {Request} req The incoming request object.
 * @returns {NextResponse} The response object.
 */
export async function POST(req) {
    try {
        // Parse the JSON body from the request.
        const { name, email, msg, mobile } = await req.json();

        // --- 1. Check for exact duplicate submission ---
        // This query finds a document with the exact same name, email, and message.
        const existingContact = await Contact.findOne({
            name: name,
            email: email,
            msg: msg
        });

        if (existingContact) {
            // Return a 409 Conflict status if a duplicate is found.
            return NextResponse.json({
                message: 'A duplicate submission with this exact information already exists.',
            }, { status: 409 });
        }

        // --- 2. Check for submission cooldown period (20 minutes) ---
        // Find the most recent submission from this email address.
        const lastSubmission = await Contact.findOne({ email: email }).sort({ createdAt: -1 });

        if (lastSubmission) {
            const currentTime = new Date();
            const timeDifference = currentTime - lastSubmission.createdAt;
            const cooldownTime = 20 * 60 * 1000; // 20 minutes in milliseconds

            if (timeDifference < cooldownTime) {
                const remainingTimeMs = cooldownTime - timeDifference;
                const remainingMinutes = Math.ceil(remainingTimeMs / (1000 * 60));
                // Return a 429 Too Many Requests status if the user is in the cooldown period.
                return NextResponse.json({
                    message: `Please wait ${remainingMinutes} minutes before submitting again.`,
                }, { status: 429 });
            }
        }

        // --- 3. Create and save the new contact document ---
        const newContact = new Contact({
            name,
            email,
            msg,
            mobile
        });

        await newContact.save();

        // --- 4. Send notification emails (non-blocking) ---
        // Using .catch() to handle potential errors without blocking the main response.
        sendContactNotification(newContact).catch(err => console.error("Failed to send contact notification email:", err));
        sendThankYouEmail(newContact).catch(err => console.error("Failed to send thank you email:", err));

        // --- 5. Return success response ---
        // Return a 201 Created status for a successful submission.
        return NextResponse.json({
            message: 'Contact information submitted successfully.',
        }, { status: 201 });

    } catch (error) {
        // Handle validation errors or other database errors.
        // Return a 400 Bad Request status for any errors.
        return NextResponse.json({
            message: 'Failed to submit contact information.',
            error: error.message
        }, { status: 400 });
    }
}
