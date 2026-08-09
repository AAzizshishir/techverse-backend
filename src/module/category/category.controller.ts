import { Request, Response } from "express";
import { categoryService } from "./category.service";

const createCategory = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const category = await categoryService.createCategory(payload);
    res.status(201).json({
      success: true,
      data: category,
      message: "Category created successfully",
    });
  } catch (error) {
    console.error(error, "error from category");
  }
};

export const categoryController = {
  createCategory,
};
