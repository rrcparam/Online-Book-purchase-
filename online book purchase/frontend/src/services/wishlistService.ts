import type { Book } from "../types";
import  { WishlistRepository } from "../repositories/wishlistRepository";

export const WishlistService = {
  getWishlist(): Book[] {
    return WishlistRepository.getAll();
  },

  addToWishlist(book: Book): void {
    const exists = WishlistRepository.getAll().some((b) => b.id === book.id);
    if (!exists) WishlistRepository.add(book);
  },

  removeFromWishlist(id: number): void {
    WishlistRepository.remove(id);
  },

  isInWishlist(id: number): boolean {
    return WishlistRepository.getAll().some((b) => b.id === id);
  },
};