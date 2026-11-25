import express, { Express, Request, Response } from "express";
import cors from "cors";
import { PORT } from "./config/server.config.js";
import v1router from "./routes/v1/index.js";

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
