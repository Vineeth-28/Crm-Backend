import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { PORT } from './config/server.config.js';

const app: Express = express();

app.use(cors());

// Parses incoming JSON payloads (Content-Type: application/json)
app.use(express.json());

// Parses incoming URL-encoded form data (Content-Type: application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req: Request, res: Response) => {
  return res.status(201).json({
    success: true,
    data: { id: 1, name: 'Vineet' }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
