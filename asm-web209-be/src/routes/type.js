import express from "express";
import { createType, getAllType } from "../controllers/type.js";
import { validator } from "../middlewares/validationMiddleware.js";
import { createTypeSchema } from "../schemas/type.js";

const router = express.Router();

router.get("/types", getAllType);
router.post("/types/create", [validator(createTypeSchema), createType]);

export default router;
