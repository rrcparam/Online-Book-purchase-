import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/footer";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist/Wishlist";

import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}