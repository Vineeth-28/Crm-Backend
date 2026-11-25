import express, { Express, Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config/server.config.js";
import v1router from "./routes/v1/index.js";

//  import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", v1router);

app.get("/ping", (req: Request, res: Response) => {
  return res.status(200).json({
    success: true,
    data: { id: 1, name: "Vineet" },
  });
});

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

// const newUser = await prisma.user.create({
//     data: {
//       email: "alex@example.com",
//       name: "Alex",
//       password: "hashed_password_here", // Remember to hash passwords (e.g., with bcrypt)
//       // roles is optional because it defaults to [USER], or you can pass:
//       // roles: [Role.USER, Role.ADMIN],
//     },
//   });
//   console.log("Created user:", newUser);
})
