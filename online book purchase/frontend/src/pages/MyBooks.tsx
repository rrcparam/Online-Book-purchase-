import { useEffect, useState } from "react";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
};

export default function MyBooks() {
  const { getToken, isSignedIn } = useAuth();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadMyBooks() {
      if (!isSignedIn) return;

      try {
        setLoading(true);

        const token = await getToken();

        if (!token) {
          console.error("No Clerk token found");
          return;
        }

        const response = await fetch("http://localhost:3001/books/mine", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Failed response:", errorText);
          throw new Error("Failed to fetch my books");
        }

        const data = await response.json();

        if (Array.isArray(data)) {
          setBooks(data);
        } else {
          setBooks([]);
        }
      } catch (error) {
        console.error("Error loading my books:", error);
        setBooks([]);
      } finally {
        setLoading(false);
      }
    }

    loadMyBooks();
  }, [getToken, isSignedIn]);

  return (
    <section className="catalog">
      <h2>My Books</h2>

      <SignedOut>
        <p>Please log in to view your books.</p>
      </SignedOut>

      <SignedIn>
        {loading ? (
          <p>Loading...</p>
        ) : books.length === 0 ? (
          <p>No books found. Add a book first.</p>
        ) : (
          <div className="book-grid">
            {books.map((book) => (
              <div className="book-card" key={book.id}>
                <img src={book.image} alt={book.title} />
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>${book.price}</p>
              </div>
            ))}
          </div>
        )}
      </SignedIn>
    </section>
  );
}