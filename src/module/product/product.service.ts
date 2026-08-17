import { prisma } from "../../../lib/prisma";

interface CreateProductInput {
  name: string;
  slug: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: string;
  thumbnail?: string;
  images?: string[];
}

const createProduct = async (payload: CreateProductInput) => {
  const existingProduct = await prisma.product.findUnique({
    where: { slug: payload.slug },
  });

  if (existingProduct) {
    throw new Error("Product with this slug already exists");
  }

  const category = await prisma.category.findUnique({
    where: { id: payload.categoryId },
  });

  if (!category) {
    throw new Error("Category not found");
  }

  const product = await prisma.product.create({
    data: {
      name: payload.name,
      slug: payload.slug,
      description: payload.description,
      price: payload.price,
      stock: payload.stock,
      categoryId: payload.categoryId,
      thumbnail: payload.thumbnail,
      images: payload.images ?? [],
    },
  });
  return product;
};

const getProducts = async () => {
  const result = await prisma.product.findMany();
  return result;
};

export const productService = {
  createProduct,
  getProducts,
};
