import cors from "cors";
import express from "express";
import mongoose from "mongoose";

// routes
import { errorHandlerMiddleware } from "./middlewares/errorHandler.js";
import brandRoutes from "./routes/brand.js";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import typeRoutes from "./routes/type.js";
import colorRouters from "./routes/color.js";

const app = express();

app.use(
  express.json({
    limit: "50mb",
  })
);
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cors());

app.use("/", productRoutes);
app.use("/", categoryRoutes);
app.use("/", brandRoutes);
app.use("/", typeRoutes);
app.use("/", colorRouters);

app.use(errorHandlerMiddleware);

const uri = "mongodb://localhost:27017/airtech";

mongoose
  .connect(uri)
  .then(() => {
    console.log("da ket noi thanh cong toi mongodb");

    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch((error) => {
    console.error(error);
  });
