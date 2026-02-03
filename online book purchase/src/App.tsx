import { useState } from "react";


import Catalog from "./pages/Catalog/Catalog";
import Wishlist from "./pages/Wishlist/Wishlist";

import type { Book } from "./types";
import "./App.css";

export default function App() {
  const [wishlist, setWishlist] = useState<Book[]>([]);

  return (
    <>
     

      <Catalog
        wishlist={wishlist}
        setWishlist={setWishlist}
      />

      <Wishlist
        wishlist={wishlist}
        setWishlist={setWishlist}
      />
    </>
  );
}