import { Link } from "react-router-dom";
import { useWishlist } from "../hooks/useWishlist";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";

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

        {/* Clerk Auth UI */}
        <SignedOut>
          <SignInButton mode="modal">
            <button type="button">Login</button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button type="button">Register</button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}