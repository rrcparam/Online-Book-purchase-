import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import "./App.css";
import Wishlist from "./pages/Wishlist/Wishlist";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>

     
    </BrowserRouter>
  );
}