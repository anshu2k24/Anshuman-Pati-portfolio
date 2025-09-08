// This service file handles sending emails using Nodemailer.
// It is designed to be used with Next.js API Routes.

import nodemailer from 'nodemailer';

// Environment variables are automatically loaded by Next.js, no need for dotenv.
const from_EMAIL_ADDRESS = process.env.from_EMAIL_ADDRESS;
const from_EMAIL_PASSWORD = process.env.from_EMAIL_PASSWORD;
const to_PORTFOLIO_EMAIL_ADDRESS = process.env.to_PORTFOLIO_EMAIL_ADDRESS;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: from_EMAIL_ADDRESS,
        pass: from_EMAIL_PASSWORD
    }
});

/**
 * Sends a notification email to the portfolio owner for a new contact form submission.
 * @param {Object} contactData - The data from the contact form submission.
 */
export const sendContactNotification = async (contactData) => {
    const { name, email, msg, mobile } = contactData;
    const mailOptions = {
        from: `Anshuman Pati <${from_EMAIL_ADDRESS}>`,
        to: to_PORTFOLIO_EMAIL_ADDRESS,
        subject: `New Contact Form Submission from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #0056b3;">New Contact Form Submission</h2>
                <p>Yo boss you have received a new message from your portfolio website. Here are the details:</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile || 'Not provided'}</p>
                <p><strong>Message:</strong></p>
                <div style="background-color: #f9f9f9; padding: 15px; border-left: 3px solid #0056b3; margin-top: 10px; white-space: pre-wrap;">${msg}</div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Contact notification email sent successfully.');
    } catch (error) {
        console.error('Error sending contact notification email:', error);
    }
};

/**
 * Sends a "thank you" email to the user who submitted the contact form.
 * @param {Object} contactData - The data from the contact form submission.
 */
export const sendThankYouEmail = async (contactData) => {
    const { name, email } = contactData;
    const mailOptions = {
        from: `Anshuman Pati <${from_EMAIL_ADDRESS}>`,
        to: email, // The user's email address
        subject: `Thank you for contacting me!`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #0056b3;">Thank you for your message!</h2>
                <p>Hi ${name},</p>
                <p>Thank you for reaching out. I wanted to let you know that I've received your message and will get back to you as soon as possible.</p>
                <p>I appreciate you taking the time to connect with me.</p>
                <br>
                <p>Best regards,</p>
                <p><strong>Anshuman Pati</strong></p>
                <p style="font-size: 0.9em; color: #777;">
                    Portfolio Website
                </p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Thank you email - sent successfully.');
    } catch (error) {
        console.error('Error sending - thank you email:', error);
    }
};

/**
 * Sends a notification email to the portfolio owner for a new suggestion.
 * @param {Object} suggestionData - The data from the suggestion form submission.
 */
export const sendSuggestionNotification = async (suggestionData) => {
    const { name, suggested } = suggestionData;
    const mailOptions = {
        from: `Anshuman Pati <${from_EMAIL_ADDRESS}>`,
        to: to_PORTFOLIO_EMAIL_ADDRESS,
        subject: `New Suggestion from ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                <h2 style="color: #0056b3;">Yo boss new Suggestion Received</h2>
                <p>You have a new suggestion from your portfolio website suggestion section. Here are the details:</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Suggestion:</strong></p>
                <div style="background-color: #f9f9f9; padding: 15px; border-left: 3px solid #0056b3; margin-top: 10px; white-space: pre-wrap;">${suggested}</div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Suggestion notification email - sent successfully.');
    } catch (error) {
        console.error('Error sending - suggestion email:', error);
    }
};
