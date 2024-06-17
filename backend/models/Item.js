// backend/models/Item.js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  insight: { type: String, required: true },
  url: { type: String },
  region: { type: String },
  start_year: { type: Number, required: true },
  end_year: { type: Number },
  impact: { type: String },
  added: { type: Date }, // Consider converting to Date type if needed
  published: { type: Date }, // Consider converting to Date type if needed
  country: { type: String },
  relevance: { type: Number },
  pestle: { type: String },
  source: { type: String, required: true },
  sector: { type: String, required: true },
  topic: { type: String, required: true },
  likelihood: { type: Number },
});

const Record  = mongoose.model("record", itemSchema);
module.exports = Record;
