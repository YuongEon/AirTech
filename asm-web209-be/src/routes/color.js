import express from "express";
import {
  createColor,
  deleteColorById,
  fetchColor,
  fetchColorById,
} from "../controllers/color.js";
import { validator } from "../middlewares/validationMiddleware.js";
import { createColorSchema } from "../schemas/color.js";

const router = express.Router();

router.post("/products/colors/create", [
  validator(createColorSchema),
  createColor,
]);
router.get("/products/colors", fetchColor);
router.get("/products/color/:id", fetchColorById);
router.delete("/products/colors/:id", deleteColorById);

export default router;
