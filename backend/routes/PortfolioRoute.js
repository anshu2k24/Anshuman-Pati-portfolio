const express = require('express');
const router = express.Router();
const {submitContactForm} = require('../controllers/ContactController');

const {submitSuggestion} = require('../controllers/SuggestionController');


// Route for submitting contact form
router.post('/contactme', submitContactForm);

// Route for submitting suggestions
router.post('/suggestion', submitSuggestion);

module.exports = router;