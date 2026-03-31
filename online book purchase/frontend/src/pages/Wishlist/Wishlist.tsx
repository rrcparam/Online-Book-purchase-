import { useWishlist } from "../../hooks/useWishlist";

export default function Wishlist() {
  const { wishlist, remove } = useWishlist();

  return (
    <section>
      <h2>Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No books</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id}>
            <h3>{item.book?.title}</h3>
            <p>${item.book?.price}</p>
            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
        ))
      )}
    </section>
  );
}