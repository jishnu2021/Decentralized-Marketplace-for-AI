const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  oldPassword: { type: String, required: true },
  newPassword: { type: String, required: true },
  gender: { type: String, required: true },
  image: String, 
});

const Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;
