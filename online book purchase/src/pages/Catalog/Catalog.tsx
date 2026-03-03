import type { Book } from "../../types"; 
import { useBooks } from "../../hooks/useBooks";
import "./Catalog.css";

type CatalogProps = {
  wishlist: Book[];
  setWishlist: React.Dispatch<React.SetStateAction<Book[]>>;
};

/**
 
 * Catalog is presentation-only.
 
 */
export default function Catalog({ wishlist, setWishlist }: CatalogProps) {
  const { books, search, setSearch } = useBooks();

  function addBook(book: Book) {
    if (!wishlist.find((b) => b.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  }

  function removeBook(id: number) {
    setWishlist(wishlist.filter((b) => b.id !== id));
  }

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
          const inWishlist = wishlist.some((b) => b.id === book.id);

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
                <button onClick={() => addBook(book)}>Add to Wishlist</button>
              ) : (
                <button onClick={() => removeBook(book.id)}>Remove</button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}