import { prisma } from "../../../lib/prisma";

interface CreateCategoryInput {
  name: string;
}

const createCategory = async (payload: CreateCategoryInput) => {
  const existingCategory = await prisma.category.findUnique({
    where: { name: payload.name },
  });

  if (existingCategory) {
    throw new Error("This category already exists");
  }

  const createCategory = await prisma.category.create({
    data: {
      name: payload.name,
    },
  });

  return createCategory;
};

export const categoryService = {
  createCategory,
};
