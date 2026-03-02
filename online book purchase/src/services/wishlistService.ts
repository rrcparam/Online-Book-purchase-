import type { Book } from "../types";
import { wishlistRepository } from "../repositories/wishlistRepository";

function getWishlist(): Book[] {
  return wishlistRepository.getAll();
}

function addToWishlist(book: Book): void {
  wishlistRepository.add(book);
}

function removeFromWishlist(id: number): void {
  wishlistRepository.remove(id);
}

export const wishlistService = {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
};