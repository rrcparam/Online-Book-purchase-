import type { Book } from "../../types";
import "./Wishlist.css";

type WishlistProps = {
  wishlist: Book[];
  setWishlist: React.Dispatch<React.SetStateAction<Book[]>>;
};

export default function Wishlist({
  wishlist,
  setWishlist,
}: WishlistProps) {
  function removeBook(id: number) {
    setWishlist(wishlist.filter((b) => b.id !== id));
  }

  return (
    <section className="wishlist">
      <h2>Wishlist</h2>

      {wishlist.length === 0 && (
        <p>No books in wishlist.</p>
      )}

      <ul>
        {wishlist.map((book) => (
          <li key={book.id}>
            {book.title} - ${book.price}
            <button
              onClick={() => removeBook(book.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
