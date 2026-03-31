import { z } from "zod";

export const createWishlistSchema = z.object({
  bookId: z.number().int().positive(),
});