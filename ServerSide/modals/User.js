const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: Number, default: 0, enum: [0], required: true }, // 0 for tenant
    notifications: [
      {
        type: { type: String },
        message: { type: String },
        contractId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "OwnerContract",
        },
      },
    ],
  },
  { timestamps: true, collection: "user" }
);

module.exports = mongoose.model("user", userSchema);
