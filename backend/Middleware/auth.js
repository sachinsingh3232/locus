const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const isUserAuthenticated = async (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (token) {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const existingUser = await User.findById(decodedToken.id);
      req.user = existingUser;
      req.decodedToken = decodedToken;
      next();
    } else {
      res.status(401).json({ message: "Please Login" });
    }
  } catch (e) {
    console.log(e);
    res.status(401).json({ message: "Please Login" });
  }
};

module.exports = isUserAuthenticated;
