import type { Book } from "../types";

let wishlist: Book[] = [];

function getAll(): Book[] {
  return wishlist;
}

function add(book: Book): void {
  const exists = wishlist.find((b) => b.id === book.id);
  if (!exists) {
    wishlist.push(book);
  }
}

function remove(id: number): void {
  wishlist = wishlist.filter((b) => b.id !== id);
}

export const wishlistRepository = {
  getAll,
  add,
  remove,
};