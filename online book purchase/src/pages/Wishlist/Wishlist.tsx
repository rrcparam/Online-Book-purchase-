import { useWishlist } from "../../hooks/useWishlist";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <section className="wishlist">
      <h2>Wishlist</h2>

      {wishlist.length === 0 && <p>No books in wishlist.</p>}

      {wishlist.map((book) => (
        <div key={book.id} className="wishlist-item">
          <img src={book.image} alt={book.title} />
          <div>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <button onClick={() => removeFromWishlist(book.id)}>Remove</button>
          </div>
        </div>
      ))}
    </section>
  );
}