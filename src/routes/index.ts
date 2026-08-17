import { Router } from "express";
import { categoryRouter } from "../module/category/category.router";
import { productRouter } from "../module/product/product.router";

const router = Router();

// Category Route
router.use("/category", categoryRouter);

// Product Route
router.use("/product", productRouter);

export const indexRoutes = router;
