const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  title: String,
  description: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
