import { useState } from "react";
import type { Book } from "../types";
import { wishlistService } from "../services/wishlistService";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<Book[]>(
    wishlistService.getWishlist()
  );

  function add(book: Book) {
    wishlistService.addToWishlist(book);
    setWishlist([...wishlistService.getWishlist()]);
  }

  function remove(id: number) {
    wishlistService.removeFromWishlist(id);
    setWishlist([...wishlistService.getWishlist()]);
  }

  return {
    wishlist,
    add,
    remove
  };
}