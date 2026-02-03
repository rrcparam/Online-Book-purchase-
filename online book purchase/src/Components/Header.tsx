import { Link } from "react-router-dom";

type HeaderProps = {
  wishlistCount: number;
};

export default function Header({ wishlistCount }: HeaderProps) {
  return (
    <header>
      <h1>Online Book Purchaser</h1>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/wishlist">
          Wishlist ({wishlistCount})
        </Link>
      </nav>
    </header>
  );
}