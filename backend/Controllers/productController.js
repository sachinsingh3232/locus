const ProductModel = require("../Models/productModel");


const createProductController = async (req, res) => {
    try {
      const { name, slug, description, price, category, quantity, shipping } =
        req.fields;
      const { photo } = req.files;
  
      switch (true) {
        case !name:
          return res.status(401).send({ message: "Name is required" });
        case !description:
          return res.status(401).send({ message: "Description is required" });
        case !price:
          return res.status(401).send({ message: "Price is required" });
        case !category:
          return res.status(401).send({ message: "Category is required" });
        case !quantity:
          return res.status(401).send({ message: "Quantity is required" });
        case photo && photo.size > 1000000:
          return res
            .status(500)
            .send({ error: "photo is Required and should be less then 1mb" });
      }
  
      const products = new productModel({ ...req.fields, slug: slugify(name) });
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }
  
      await products.save();
      res.status(201).send({
        success: true,
        message: "new product created successfully",
        products,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in creating product",
        error,
      });
    }
  };

  const getProductController = async(req, res) => {
    try{
        const products = await productModel.find({}).select("-photo").limit(12).sort({createdAt: -1});
        res.status(200).send({
            success: true,
            totalCount: products.length,
            message: "all products",
            products
        });
    } catch(error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting all products",
            error
        });
    }
};

const getSingleProductController = async(req, res) => {
    try {
        const product = await productModel.findOne({slug: req.params.slug}).select("-photo");
        res.status(200).send({
            success: true,
            message: "single product fetched",
            product
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in getting single Product",
            error
        });
    }
};

const deleteProductController = async (req, res) => {
    try {
      const product = await productModel
        .findByIdAndDelete(req.params.id)
        .select("-photo");
      res.status(200).send({
        success: true,
        message: "product deleted successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error while deleting product",
        error,
      });
    }
  };
const productCountController = async (req, res) => {
    try {
      const total = await productModel.find({}).estimatedDocumentCount();
      res.status(200).send({
        success: true,
        total,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error in product count",
        error,
      });
    }
  };
  
exports.module = {createProductController, getProductController, getSingleProductController, deleteProductController,productCountController};