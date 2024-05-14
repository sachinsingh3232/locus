const Sales = require('../Models/salesModel')

const addSales = async (req, res) => {
  const product = await productModel.findOne({ _id: req.body.productId });
  if (!product) {
    res.status(404).json({ message: "Product not found !" });
    return;
  }
  if (product.quantity < req.body.sales) {
    res.status(404).json({ message: "Out of Stock!" });
    return;
  }

  let sale = await Sales.find({
    productId: req.body.productId,
    month: date.getMonth(),
  });
  if (!sale) {
    const date = new Date();
    await Sales.create({
      productId: req.body.productId,
      sales: req.body.sales,
      month: date.getMonth(),
    });
  } else {
    await Sales.findByIdAndUpdate(
      { _id: sale._id },
      {
        sales: sale.sales + req.body.sales,
      }
    );
  }
};
const findSales = async(req,res)=> {
    const result = await Sales.find({ month: req.body.month })
    res.status(200).json({ result });
}

module.exports={addSales,findSales}
