import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true, lowercase: true },
  name: { type: String, required: true, trim: true },
  msg: { type: String, required: true },
  mobile: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

// Check if model already exists, otherwise create it
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default Contact;
