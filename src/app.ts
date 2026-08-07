import express, { Application } from "express";

const app: Application = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to TechVerse!");
});

app.listen(port, () => {
  console.log(`TechVerse app listening on port ${port}`);
});
