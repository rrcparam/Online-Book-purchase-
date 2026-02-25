import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog/Catalog";
import Wishlist from "./pages/Wishlist/Wishlist";

import type { Book } from "./types";
import "./App.css";

export default function App() {
  const [wishlist, setWishlist] = useState<Book[]>([]);

  return (
    <BrowserRouter>
      <Header wishlistCount={wishlist.length} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/catalog"
          element={
            <Catalog wishlist={wishlist} setWishlist={setWishlist} />
          }
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist wishlist={wishlist} setWishlist={setWishlist} />
          }
        />
      </Routes>
       <Footer />
    </BrowserRouter>
    
  );
}



