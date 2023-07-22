import express from "express";
import { createCategory, deleteCategory, getAllCategory } from "../controllers/category.js";
import { validator } from "../middlewares/validationMiddleware.js";
import { createCategorySchema } from "../schemas/category.js";

const router = express.Router();

router.get("/categories", getAllCategory);
router.post("/categories/create", [
  validator(createCategorySchema),
  createCategory,
]);
router.delete("/categories/delete/:id", deleteCategory)

export default router;
