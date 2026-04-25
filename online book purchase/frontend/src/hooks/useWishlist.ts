import { useEffect, useState } from "react";
import { wishlistRepository } from "../repositories/wishlistRepository";
import { useUser } from "@clerk/clerk-react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);
  const { user } = useUser();

  async function load() {
    if (!user) return;
    const data = await wishlistRepository.getAll(user.id);
    setWishlist(data);
  }

  useEffect(() => {
    if (user) {
      load();
    }
  }, [user]);

  async function add(bookId: number) {
    if (!user) return;

    await wishlistRepository.add(bookId, user.id);
    await load(); // ✅ ensures latest data
  }

  async function remove(id: number) {
    if (!user) return;

    await wishlistRepository.remove(id);
    await load();
  }

  return { wishlist, add, remove, load };
}