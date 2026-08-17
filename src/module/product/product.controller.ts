import { Request, Response } from "express";
import { productService } from "./product.service";
import { catchAsync } from "../../utils/catchAsync";

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

const getProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await productService.getProducts();
  res.status(200).json({
    success: true,
    data: result,
    message: "Products get successfully",
  });
});

export const productController = {
  createProduct,
  getProducts,
};
