import express, { Application } from "express";
import { auth } from "../lib/auth";
import { toNodeHandler } from "better-auth/node";
import { categoryRouter } from "./module/category/category.router";
import { productRouter } from "./module/product/product.router";
import { indexRoutes } from "./routes";

const app: Application = express();

app.use(express.json());

app.use("/api/v1", indexRoutes);

app.get("/", (req, res) => {
  res.json({ message: "TechVerse Server is running!" });
});

app.all("/api/auth/{*any}", toNodeHandler(auth));

export default app;
