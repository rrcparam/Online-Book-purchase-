import { useBooks } from "../../hooks/useBooks";
import "./Catalog.css";

export default function Catalog() {
  const { books, search, setSearch } = useBooks();

  return (
    <section className="catalog">
      <h2>Book Catalog</h2>

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
          </div>
        ))}
      </div>
    </section>
  );
}