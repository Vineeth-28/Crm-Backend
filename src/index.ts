import express, { Express, Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config/server.config.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    data: { id: 1, name: "Vineet" },
  });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    // Using upsert prevents crashes if the email already exists on restart
    const user = await prisma.uSER.upsert({
      where: { email: "elsa@prisma.io" },
      update: {},
      create: {
        email: "elsa@prisma.io",
        name: "Elsa Prisma",
        password: "tempPassword123", // Remember to hash passwords in production
      },
    });
    console.log(user);
  } catch (error) {
    console.error("Error creating user:", error);
  }
});
