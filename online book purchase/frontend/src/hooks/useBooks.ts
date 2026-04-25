import { useEffect, useState } from "react";

export function useBooks() {
  const [books, setBooks] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchBooks() {
      try {
        const res = await fetch("http://localhost:3001/books");

        if (!res.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await res.json();
        console.log("BOOKS:", data); // DEBUG
        setBooks(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchBooks();
  }, []);

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  );

  return { books: filtered, search, setSearch };
}