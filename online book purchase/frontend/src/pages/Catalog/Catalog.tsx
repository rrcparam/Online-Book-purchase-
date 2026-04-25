import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { useBooks } from "../../hooks/useBooks";

import "./Catalog.css";

export default function Catalog() {
  const { books, search, setSearch } = useBooks();
  
  return (
    <section className="catalog">
      <div className="catalog-header">
        <h2>Book Catalog</h2>

        <div className="catalog-actions">
          <SignedIn>
            <Link to="/add-book" className="catalog-action-btn">
              Add Book
            </Link>

            <Link to="/my-books" className="catalog-action-btn secondary-btn">
              My Books
            </Link>
          </SignedIn>
        </div>
      </div>

      <input
        className="search-input"
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <img
              src={book.image}
              alt={book.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://via.placeholder.com/150?text=No+Image";
              }}
            />

            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>${book.price}</p>

            <SignedOut>
              <p className="book-note">
                Login to add books, manage your books, and use wishlist.
              </p>
            </SignedOut>

            <SignedIn>
              <div className="book-actions">
                <Link to="/my-books" className="book-btn">
                  My Books
                </Link>

                <Link to="/add-book" className="book-btn secondary-btn">
                  Add Book
                </Link>

                <button
                  type="button"
                  className="book-btn wishlist-btn"
                 
                >
                  
                </button>
              </div>
            </SignedIn>
          </div>
        ))}
      </div>
    </section>
  );
}