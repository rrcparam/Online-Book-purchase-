import { useEffect } from "react";
import { useWishlist } from "../../hooks/useWishlist";
import { useUser } from "@clerk/clerk-react";

export default function Wishlist() {
  const { wishlist, remove, load } = useWishlist();
  const { user } = useUser();

  // ✅ FORCE reload when page opens
  useEffect(() => {
    if (user) {
      load();
    }
  }, [user]);

  if (!user) return <p>Please login</p>;

  return (
    <div>
      <h2>Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        wishlist.map((item) => (
          <div key={item.id}>
            <p>{item.book?.title}</p>
            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}