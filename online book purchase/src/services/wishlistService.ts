import type { Book } from "../types";

let wishlist: Book[] = [];

function getWishlist() {
  return wishlist;
}

function addToWishlist(book: Book) {
  const alreadyAdded = wishlist.find((b) => b.id === book.id);

  if (!alreadyAdded) {
    wishlist.push(book);
  }
}

function removeFromWishlist(id: number) {
  wishlist = wishlist.filter((b) => b.id !== id);
}

export const wishlistService = {
  getWishlist,
  addToWishlist,
  removeFromWishlist
};