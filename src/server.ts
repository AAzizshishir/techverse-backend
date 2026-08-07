import { prisma } from "../lib/prisma";
import app from "./app";

const port = 5000;

async function main() {
  try {
    await prisma.$connect();
    console.log("Connected to database");

    app.listen(5000, () => {
      console.log(`Server running on port 5000`);
    });
  } catch (error) {
    console.error("Error:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

main();
