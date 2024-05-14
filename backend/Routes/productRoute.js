const express = require("express");
const router = express.Router();

const {
  deleteProductController,
  createProductController,
  getSingleProductController,
  productCountController,
  filterProduct,
} = require("../Controllers/productController");
const isUserAuthenticated = require("../Middleware/auth");
router
  .route("/createProductController")
  .post(isUserAuthenticated,createProductController);
router
  .route("/getSingleProductController/:slug")
  .get(isUserAuthenticated,getSingleProductController);
router
  .route("/deleteProductController/:id")
  .delete(isUserAuthenticated,deleteProductController);
router
  .route("/productCountController")
  .get(isUserAuthenticated,productCountController);
router.route("/filterProduct").get(isUserAuthenticated,filterProduct);

module.exports = router;

