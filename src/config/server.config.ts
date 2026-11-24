import dotenv from "dotenv";
import { fileURLToPath } from "node:url";

const envPath = fileURLToPath(new URL("../../.env", import.meta.url));

dotenv.config({ path: envPath, override: false });

export const PORT = Number(process.env.PORT || 3005);
export const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/CrmBackend";