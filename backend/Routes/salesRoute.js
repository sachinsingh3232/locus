const express = require("express");
const { findSales, addSales } = require("../Controllers/salesController");
const isUserAuthenticated = require("../Middleware/auth");

const router = express.Router();

router.route("/addSales").post(isUserAuthenticated,addSales);
router.route("/findSales").get(isUserAuthenticated,findSales);

module.exports = router;
