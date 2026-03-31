import type { Book } from "../types/Book";

export const BookService = {
  filterBySearch(books: Book[], search: string): Book[] {
    const query = search.trim().toLowerCase();

    if (!query) return books;

    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query)
    );
  },
};