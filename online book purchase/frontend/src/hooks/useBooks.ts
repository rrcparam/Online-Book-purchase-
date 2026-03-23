import { useMemo, useState } from "react";
import type { Book } from "../types/Book";
import { BookService } from "../services/BookService";

type UseBooksResult = {
  books: Book[];
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

/**
 * useBooks returns:
 * - books: filtered list for display
 * - search: current search text
 * - setSearch: updates the search text
 *
 * This hook manages presentation state and delegates business logic to BookService.
 */
export function useBooks(): UseBooksResult {
  const [search, setSearch] = useState("");

  const books = useMemo(() => {
    const all = BookService.getAllSorted();
    return BookService.filterBySearch(all, search);
  }, [search]);

  return { books, search, setSearch };
}