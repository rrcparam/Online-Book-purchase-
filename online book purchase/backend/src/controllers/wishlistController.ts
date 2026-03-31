import { Request, Response } from "express";
import { wishlistService } from "../services/wishlistService";

export const wishlistController = {
  async getAll(_req: Request, res: Response) {
    const data = await wishlistService.getAll();
    res.json(data);
  },

  async create(req: Request, res: Response) {
    const item = await wishlistService.add(req.body.bookId);
    res.json(item);
  },

  async remove(req: Request, res: Response) {
    const id = Number(req.params.id);
    await wishlistService.remove(id);
    res.json({ message: "deleted" });
  },
};