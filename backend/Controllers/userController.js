const User = require("../Models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(409).json({ message: "User Already Exist !" });
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      age: req.body.age,
      sex: req.body.sex,
    });

    res.status(200).json({ message: "Registered Successfully!" });
  } catch (e) {
    console.log(e);
  }
};

const Login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "user doesn't exist!" });
      return;
    }
    const isCorrectPassword = bcrypt.compareSync(
      req.body.password,
      user.password
    );

    if (!isCorrectPassword) {
      res.status(400).json({ message: "Wrong email or password" });
      return;
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);
    const { password, ...userInfo } = user;
    res.status(200).json({ userInfo, token });
  } catch (e) {
    console.log(e);
  }
};

module.exports = { Register, Login };
