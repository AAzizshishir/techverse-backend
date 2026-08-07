import express, { Application } from "express";
import { auth } from "../lib/auth";
import { toNodeHandler } from "better-auth/node";

const app: Application = express();

app.get("/", (req, res) => {
  res.json({ message: "TechVerse Server is running!" });
});

app.all("/api/auth/{*any}", toNodeHandler(auth));

export default app;
