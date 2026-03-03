import type { Book } from "../types/Book";
import { BookRepository } from "../repositories/BookRepository";

export const BookService = {
  // there is  rule in business that always sorted by title
  getAllSorted(): Book[] {
    return [...BookRepository.getAll()].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  },

  // ou business rule is  search by title/author
  filterBySearch(books: Book[], search: string): Book[] {
    const q = search.trim().toLowerCase();
    if (!q) return books;

    return books.filter(
      (b) =>
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q)
    );
  },
};