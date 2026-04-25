import { Request, Response } from "express";
import { wishlistService } from "../services/wishlistService";

export const wishlistController = {
  async getAll(req: Request, res: Response) {
    const userId = req.query.userId as string;
    const data = await wishlistService.getAll(userId);
    res.json(data);
  },

  async create(req: Request, res: Response) {
    const { bookId, userId } = req.body;
    const item = await wishlistService.add(bookId, userId);
    res.json(item);
  },

  async remove(req: Request, res: Response) {
    const id = Number(req.params.id);
    await wishlistService.remove(id);
    res.json({ message: "deleted" });
  },
};