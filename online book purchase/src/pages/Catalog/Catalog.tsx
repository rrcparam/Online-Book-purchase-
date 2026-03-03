import { useBooks } from "../../hooks/useBooks";
import { useWishlist } from "../../hooks/useWishlist";
import "./Catalog.css";


export default function Catalog() {
  const { books, search, setSearch } = useBooks();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

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
        {books.map((book) => {
          const inWishlist = isInWishlist(book.id);

          return (
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

              {!inWishlist ? (
                <button onClick={() => addToWishlist(book)}>Add to Wishlist</button>
              ) : (
                <button onClick={() => removeFromWishlist(book.id)}>Remove</button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}