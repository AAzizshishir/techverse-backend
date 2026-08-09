import { Request, Response } from "express";
import { productService } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await productService.createProduct(payload);
    res.status(201).json({
      success: true,
      data: result,
      message: "Product created successfully",
    });
  } catch (error) {
    console.error(error);
  }
};

export const productController = {
  createProduct,
};
