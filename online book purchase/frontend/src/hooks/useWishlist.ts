import { useEffect, useState } from "react";
import type { Book } from "../types";
import { WishlistService } from "../services/wishlistService";

type UseWishlistResult = {
  wishlist: Book[];
  addToWishlist: (book: Book) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
};

export function useWishlist(): UseWishlistResult {
  const [wishlist, setWishlist] = useState<Book[]>([]);

  useEffect(() => {
    setWishlist(WishlistService.getWishlist());
  }, []);

  function addToWishlist(book: Book) {
    WishlistService.addToWishlist(book);
    setWishlist(WishlistService.getWishlist());
  }

  function removeFromWishlist(id: number) {
    WishlistService.removeFromWishlist(id);
    setWishlist(WishlistService.getWishlist());
  }

  function isInWishlist(id: number) {
    return WishlistService.isInWishlist(id);
  }

  return { wishlist, addToWishlist, removeFromWishlist, isInWishlist };
}