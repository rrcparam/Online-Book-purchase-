import express from "express";
import { wishlistController } from "../controllers/wishlistController";

const router = express.Router();

router.get("/", wishlistController.getAll);
router.post("/", wishlistController.create);
router.delete("/:id", wishlistController.remove);

export default router;