const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String, required: true },
    role: { type: Number, default: 1, enum: [1], required: true }, // 1 for owner
  },
  { timestamps: true, collection: "owner" }
);

module.exports = mongoose.model("Owner", ownerSchema);
