const UserModel = require("../modals/User");

const tenantRegister = async (req, res) => {
  try {
    const tenant = new UserModel(req.body); // Rename the instance variable
    const result = await tenant.save();
    res.status(201).json(result.toObject());
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const tenantLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new Error("Invalid Credentials");
    }
    const user = await UserModel.findOne({ email, password }).select(
      "-password"
    );
    if (!user) {
      throw new Error("Invalid Credentials");
    }
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { tenantRegister, tenantLogin };
