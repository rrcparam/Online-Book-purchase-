import { z } from "zod";

export const wishlistSchema = z.object({
  bookId: z.number(),
  userId: z.string(),
});