import express from "express";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes";
import wishlistRoutes from "./routes/wishlistRoutes"
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.get("/", (_req, res) => {
  res.json({ message: "Backend is running" });
});

app.use("/books", bookRoutes);
app.use("/wishlist", wishlistRoutes)

export default app;