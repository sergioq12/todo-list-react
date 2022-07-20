const mongoose = require("mongoose");

// Item Schema
const ItemSchema = mongoose.Schema(
  {
    description: { type: String, required: true },
    done: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema, "items");
