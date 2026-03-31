import type { Book } from "../types";

let wishlist: Book[] = [];

export const WishlistRepository = {
  getAll(): Book[] {
    return wishlist;
  },

  add(book: Book): void {
    wishlist.push(book);
  },

  remove(id: number): void {
    wishlist = wishlist.filter((b) => b.id !== id);
  },

  clear(): void {
    wishlist = [];
  },
};