const Profile = require('../modals/Setting')
const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const Submitform = async (req, res) => {
  try {
    const profileData = {
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword,
      gender: req.body.gender,
      image: req.file ? req.file.path : null, // Store file path
    };

    let profile = new Profile(profileData);
    let result = await profile.save();
    res.status(201).json(result);
  } catch (error) {
    console.error("Error saving profile:", error);
    res.status(500).json({ error: "Failed to save profile" });
  }
}

const Getprofileimage = async (req, res) => {
  const { email } = req.params; // Use req.params to access URL parameters

  try {
    const user = await Profile.findOne({ email }); // Adjust based on your schema
    if (!user || !user.image) {
      return res.status(404).json({ message: "Profile image not found" });
    }
    res.json({ image: user.image }); // Adjust based on your schema
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = { Submitform, Getprofileimage };