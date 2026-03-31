import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";


export default function Header() {
  const { wishlist } = useWishlist();

  return (
    <header>
      <h1>Online Book Purchaser</h1>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/wishlist">
          Wishlist ({wishlist.length})
        </Link>
      </nav>
    </header>
  );
}