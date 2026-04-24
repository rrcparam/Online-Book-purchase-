import { useEffect, useState } from "react";

export default function MyBooks() {
  const [books, setBooks] = useState<any[]>([]);

  useEffect(() => {
    const loadMyBooks = async () => {
      const response = await fetch("http://localhost:3001/books/mine");
      const data = await response.json();
      setBooks(data);
    };

    loadMyBooks();
  }, []);

  return (
    <section style={{ padding: "30px" }}>
      <h2>My Books</h2>

      {books.length === 0 ? (
        <p>No books found.</p>
      ) : (
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>${book.price}</p>
          </div>
        ))
      )}
    </section>
  );
}