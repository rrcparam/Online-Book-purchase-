import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "./pages/AddBook";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog/Catalog";
import Wishlist from "./pages/Wishlist/Wishlist";
import MyBooks from "./pages/MyBooks";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/add-book" element={<AddBook />} />

        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}