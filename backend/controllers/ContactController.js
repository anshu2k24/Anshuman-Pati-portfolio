const Contact = require('../model/ContactMeModel');
const {sendContactNotification,sendThankYouEmail} = require('../services/emailService');

// Controller function for handling contact form submissions
const submitContactForm = async (req, res) => {
    try {
        // Destructure data from the request body
        const { name, email, msg, mobile } = req.body;

        //Check for exact duplicate submission
        const existingContact = await Contact.findOne({
            name: name,
            email: email,
            msg: msg
        });

        if (existingContact) {
            return res.status(409).json({
                message: 'A duplicate submission with this exact information already exists.',
            });
        }

        //Check for submission cooldown period (20 minutes)
        const lastSubmission = await Contact.findOne({ email: email }).sort({ createdAt: -1 });
        
        if (lastSubmission) {
            const currentTime = new Date();
            const timeDifference = currentTime - lastSubmission.createdAt;
            const cooldownTime = 20 * 60 * 1000; // 20 minutes in milliseconds

            if (timeDifference < cooldownTime) {
                const remainingTimeMs = cooldownTime - timeDifference;
                const remainingMinutes = Math.ceil(remainingTimeMs / (1000 * 60));
                return res.status(429).json({
                    message: `Please wait ${remainingMinutes} minutes before submitting again.`,
                });
            }
        }

        // Create a new contact document with the received data
        const newContact = new Contact({
            name,
            email,
            msg,
            mobile
        });

        // Save the new contact document to the database
        await newContact.save();

        // Send notification emails 
        sendContactNotification(newContact).catch(err => console.error(err));
        sendThankYouEmail(newContact).catch(err => console.error(err));

        // Send a success response
        res.status(201).json("Contact information submitted successfully.");

    } catch (error) {
        // Handle validation errors or other database errors
        res.status(400).json({
            message: 'Failed to submit contact information.',
            error: error.message
        });
    }
};

module.exports = {
    submitContactForm,
};
