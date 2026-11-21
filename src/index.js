import express from 'express';
import { PORT } from './config/server.config.js';
import cors from 'cors'
const app = express();
app.use(cors());

// Parses incoming JSON payloads (Content-Type: application/json)
app.use(express.json());

// Parses incoming URL-encoded form data (Content-Type: application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));
app.use('/ping' ,(req,res) =>{
    return res.status(201).json({
    success: true,
    data: { id: 1, name: 'Vineet' }
  });
})
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
