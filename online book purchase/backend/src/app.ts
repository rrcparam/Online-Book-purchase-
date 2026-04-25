import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import bookRoutes from "./routes/bookRoutes";

const app = express();

const allowedOrigins: string[] = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:5174",
].filter((origin): origin is string => Boolean(origin));

app.use(express.json());

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(
  clerkMiddleware({
    publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
    secretKey: process.env.CLERK_SECRET_KEY,
  })
);

app.get("/", (_req, res) => {
  res.json({ message: "Backend is running" });
});

app.use("/books", bookRoutes);

export default app;