const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./Config/.env" });
const connectDB = require("./Config/database.js");
const PORT = process.env.PORT || 5000;
const app = express();
const userRoutes = require("./Routes/userRoutes.js");
const productRoutes = require("./Routes/productRoute.js");
const salesRoutes=require('./Routes/salesRoute.js')

connectDB();
app.use(express.json());
// app.use(
//   cors({
//     origin: process.env.CORS_URL,
//     credentials: true,
//   })
// );

app.use("/api/product", productRoutes);
app.use("/api/sales", salesRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
