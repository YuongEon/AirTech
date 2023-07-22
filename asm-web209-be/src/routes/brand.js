import express from "express";
import { createBrand, getAllBrand } from "../controllers/brand.js";
import { validator } from "../middlewares/validationMiddleware.js";
import { createBrandSchema } from "../schemas/brand.js";

const router = express.Router();

router.get("/brands", getAllBrand);
router.post("/brands/create", [validator(createBrandSchema), createBrand]);

export default router;
