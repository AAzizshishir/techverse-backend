import { Router } from "express";
import { productController } from "./product.controller";

const router = Router();

router.post("/", productController.createProduct);

router.get("/", productController.getProducts);

export const productRouter = router;
