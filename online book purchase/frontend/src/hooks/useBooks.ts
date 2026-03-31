import { useEffect, useState } from "react";
import type { Book } from "../types/Book";
import { bookRepository } from "../repositories/BookRepository";
import { BookService } from "../services/BookService";

export function useBooks() {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadBooks = async () => {
      try {
        const data = await bookRepository.getAllBooks();
        setAllBooks(data);
        setBooks(data);
      } catch (error) {
        console.error("Failed to load books:", error);
      }
    };

    loadBooks();
  }, []);

  useEffect(() => {
    setBooks(BookService.filterBySearch(allBooks, search));
  }, [allBooks, search]);

  return { books, search, setSearch };
}