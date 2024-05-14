const express = require("express");
const { findSales, addSales } = require("../Controllers/salesController");
const router = express.Router();

router.route("/addSales").post(addSales);
router.route("/findSales").get(findSales);

module.exports = router;
