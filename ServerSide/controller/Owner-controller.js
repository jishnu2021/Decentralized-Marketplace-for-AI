const Owner = require("../modals/Owner");

const ownerRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide all required fields." });
    }
    const existingOwner = await Owner.findOne({ email });
    if (existingOwner) {
      return res
        .status(400)
        .json({ message: "Owner with this email already exists." });
    }
    let owner = new Owner({
      name,
      email,
      password, // Store plain text password (not recommended)
      role: 1, // Assuming 1 means owner
    });
    const result = await owner.save();
    res.status(201).json(result.toObject());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const ownerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Invalid Credentials");
    }
    const owner = await Owner.findOne({ email, password }).select("-password");
    if (!owner) {
      throw new Error("Invalid Credentials");
    }
    res.json({ ...owner.toObject(), role: 1 });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { ownerRegister, ownerLogin };
