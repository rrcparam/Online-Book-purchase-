import { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import heroBg from "../assets/hero-books.jpg";

export default function Home() {
  const [quoteInput, setQuoteInput] = useState("");
  const [quotes, setQuotes] = useState<string[]>([]);

  function addQuote() {
    if (quoteInput.trim() === "") return;
    setQuotes([...quotes, quoteInput]);
    setQuoteInput("");
  }

  function removeQuote(index: number) {
    setQuotes(quotes.filter((_, i) => i !== index));
  }

  return (
    <section className="home">
      <div
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <h1>Discover Your Next Favorite Book</h1>
        <p>
          Explore powerful reads, timeless classics, and modern bestsellers.
          Build your personal wishlist and never lose track of a great book again.
        </p>

        <Link to="/catalog">
          <button className="cta-btn">Browse Books</button>
        </Link>
      </div>

      <div className="features">
        <div className="feature-card">
          <h3>Huge Selection</h3>
          <p>Browse a curated list of popular and life-changing books.</p>
        </div>

        <div className="feature-card">
          <h3>Save Favorites</h3>
          <p>Add books to your wishlist and keep track of what you want to read.</p>
        </div>

        <div className="feature-card">
          <h3>Simple & Fast</h3>
          <p>Search, explore, and organize your reading list in seconds.</p>
        </div>
      </div>

     
      <div className="quote-section">
        <h2>Save Your Favorite Book Quotes</h2>

        <div className="quote-input-row">
          <input
            type="text"
            placeholder="Enter a favorite quote..."
            value={quoteInput}
            onChange={(e) => setQuoteInput(e.target.value)}
          />
          <button onClick={addQuote}>Save Quote</button>
        </div>

        {quotes.length === 0 ? (
          <p className="empty-msg">No quotes saved yet.</p>
        ) : (
          <ul className="quote-list">
            {quotes.map((quote, index) => (
              <li key={index}>
                “{quote}”
                <button
                  className="remove-btn"
                  onClick={() => removeQuote(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}


    