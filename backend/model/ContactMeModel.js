const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
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

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;