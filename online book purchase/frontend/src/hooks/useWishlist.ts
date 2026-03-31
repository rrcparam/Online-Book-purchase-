import { useEffect, useState } from "react";
import { wishlistRepository } from "../repositories/wishlistRepository";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  async function load() {
    const data = await wishlistRepository.getAll();
    setWishlist(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function add(bookId: number) {
    await wishlistRepository.add(bookId);
    load();
  }

  async function remove(id: number) {
    await wishlistRepository.remove(id);
    load();
  }

  return { wishlist, add, remove };
}