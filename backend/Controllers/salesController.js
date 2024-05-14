const addItem = async (req, res) => {
    const product = await productModel.findOne({ _id: req.body.productId })
    if (!product) {
        res.status(404).json({ message: "Product not found !" });
        return;
    }
    if (product.quantity < req.body.sales) {
        res.status(404).json({ message: "Out of Stock!" });
        return;
    }

    let sale=await Sales.find({productId:req.body.})
}