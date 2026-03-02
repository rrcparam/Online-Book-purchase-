import type { Book } from "../types/Book";
import { booksData } from "../data/bookData";

export const BookRepository = {
  getAll(): Book[] {
    return booksData;
  },

  getById(id: number): Book | undefined {
    return booksData.find((b: Book) => b.id === id);
  },

  add(book: Book): void {
    booksData.push(book);
  },

  update(updated: Book): void {
    const index = booksData.findIndex((b: Book) => b.id === updated.id);
    if (index !== -1) booksData[index] = updated;
  },

  delete(id: number): void {
    const index = booksData.findIndex((b: Book) => b.id === id);
    if (index !== -1) booksData.splice(index, 1);
  },
};