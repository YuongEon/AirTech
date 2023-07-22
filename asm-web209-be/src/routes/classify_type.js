import express from "express";
import {
  createClassifyType,
  deleteClassifyTypeById,
  fetchClassifyType,
  fetchClassifyTypeById,
} from "../controllers/classifyType";
import { validator } from "../middlewares/validationMiddleware";
import { createClassifyTypeSchema } from "../schemas/classify_type";

const router = express.Router();

router.post("/products/colors/create", [
  validator(createClassifyTypeSchema),
  createClassifyType,
]);
router.get("/products/colors", fetchClassifyType);
router.get("/products/color/:id", fetchClassifyTypeById);
router.delete("/products/colors/:id", deleteClassifyTypeById);

export default router;
