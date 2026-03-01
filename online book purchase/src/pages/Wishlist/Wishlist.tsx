import { useWishlist } from "../../hooks/useWishlist";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlist, remove } = useWishlist();

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
            <button onClick={() => remove(book.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}