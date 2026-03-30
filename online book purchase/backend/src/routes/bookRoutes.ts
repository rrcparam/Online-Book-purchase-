import { Router } from "express";
import { bookController } from "../controllers/bookController";
import { validate } from "../middleware/validate";
import { createBookSchema } from "../validation/bookSchema";

const router = Router();

router.get("/", bookController.getAll);
router.get("/:id", bookController.getById);
router.post("/", validate(createBookSchema), bookController.create);

export default router;