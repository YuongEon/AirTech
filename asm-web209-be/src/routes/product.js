import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getOneProduct,
  getPaginationProducts,
} from "../controllers/product.js";
import { createProductSchema } from "../schemas/product.js";
import { validator } from "../middlewares/validationMiddleware.js";

const router = express.Router();

router.get("/products", getPaginationProducts);
router.get("/products/:id", getOneProduct);
router.post("/products/create", [
  validator(createProductSchema),
  createProduct,
]);
router.delete("/products/delete/:id", deleteProduct);

export default router;
