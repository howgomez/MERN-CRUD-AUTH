import morgan from "morgan";
import cors from "cors";
import express from "express";
import authRoutes from './routes/auth.routes.js';
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
dotenv.config()


const app = express();
app.use(morgan("dev"));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
export default app;