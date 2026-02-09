

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/Home";
import "./App.css";


export default function App() {
  return (
    <BrowserRouter>
      <Header wishlistCount={0} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}



