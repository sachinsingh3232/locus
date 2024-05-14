const express = require("express");
const router = express.Router();

const {
  deleteProductController,
  createProductController,
  getSingleProductController,
  productCountController,
  filterProduct,
} = require("../Controllers/productController");
router.route("/createProductController").post(createProductController);
router
  .route("/getSingleProductController/:slug")
  .get(getSingleProductController);
router.route("/deleteProductController/:id").delete(deleteProductController);
router.route("/productCountController").get(productCountController);
router.route("/filterProduct").get(filterProduct);

module.exports = router;

