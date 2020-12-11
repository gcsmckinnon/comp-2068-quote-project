const mongoose = require('mongoose');

// Our schema
const QuoteSchema = new mongoose.Schema({
  author: {
    type: String,
    required: true
  },
  quote: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: new Date(),
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Quote', QuoteSchema);