import { wishlistService } from "../services/wishlistService";

export const wishlistRepository = {
  getAll(userId: string) {
    return wishlistService.getAll(userId);
  },

  add(bookId: number, userId: string) {
    return wishlistService.add(bookId, userId);
  },

  remove(id: number) {
    return wishlistService.remove(id);
  },
};