import { useState } from "react";
import type { Book } from "../../types";
import "./Catalog.css";

type CatalogProps = {
  wishlist: Book[];
  setWishlist: React.Dispatch<React.SetStateAction<Book[]>>;
};

export default function Catalog({
  wishlist,
  setWishlist,
}: CatalogProps) {
  const [search, setSearch] = useState("");

  const books: Book[] = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 18,
      image:
        "https://covers.openlibrary.org/b/title/Atomic%20Habits-L.jpg",
    },
    {
      id: 2,
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 15,
      image:
        "https://covers.openlibrary.org/b/title/The%20Alchemist-L.jpg",
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      price: 20,
      image:
        "https://covers.openlibrary.org/b/title/Deep%20Work-L.jpg",
    },
    {
      id: 4,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 17,
      image:
        "https://covers.openlibrary.org/b/title/Rich%20Dad%20Poor%20Dad-L.jpg",
    },
    {
      id: 5,
      title: "Think and Grow Rich",
      author: "Napoleon Hill",
      price: 16,
      image:
        "https://covers.openlibrary.org/b/title/Think%20and%20Grow%20Rich-L.jpg",
    },
    {
      id: 6,
      title: "The 7 Habits of Highly Effective People",
      author: "Stephen R. Covey",
      price: 22,
      image:
        "https://covers.openlibrary.org/b/title/7%20Habits%20of%20Highly%20Effective%20People-L.jpg",
    },
    {
      id: 7,
      title: "Can't Hurt Me",
      author: "David Goggins",
      price: 21,
      image:
        "https://covers.openlibrary.org/b/title/Cant%20Hurt%20Me-L.jpg",
    },
    {
      id: 8,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      price: 19,
      image:
        "https://covers.openlibrary.org/b/title/The%20Power%20of%20Now-L.jpg",
    },
    {
      id: 9,
      title: "Start With Why",
      author: "Simon Sinek",
      price: 18,
      image:
        "https://covers.openlibrary.org/b/title/Start%20With%20Why-L.jpg",
    },
    {
      id: 10,
      title: "How to Win Friends & Influence People",
      author: "Dale Carnegie",
      price: 14,
      image:
        "https://covers.openlibrary.org/b/title/How%20to%20Win%20Friends-L.jpg",
    },
    {
      id: 11,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 20,
      image:
        "https://covers.openlibrary.org/b/title/The%20Psychology%20of%20Money-L.jpg",
    },
    {
      id: 12,
      title: "Ikigai",
      author: "Héctor García",
      price: 13,
      image:
        "https://covers.openlibrary.org/b/title/Ikigai-L.jpg",
    },
    {
      id: 13,
      title: "The Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      price: 17,
      image:
        "https://covers.openlibrary.org/b/title/The%20Subtle%20Art-L.jpg",
    },
    {
      id: 14,
      title: "Zero to One",
      author: "Peter Thiel",
      price: 21,
      image:
        "https://covers.openlibrary.org/b/title/Zero%20to%20One-L.jpg",
    },
    {
      id: 15,
      title: "The Lean Startup",
      author: "Eric Ries",
      price: 19,
      image:
        "https://covers.openlibrary.org/b/title/The%20Lean%20Startup-L.jpg",
    },
    {
      id: 16,
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 18,
      image:
        "https://covers.openlibrary.org/b/title/The%20Midnight%20Library-L.jpg",
    },
    {
      id: 17,
      title: "Educated",
      author: "Tara Westover",
      price: 20,
      image:
        "https://covers.openlibrary.org/b/title/Educated-L.jpg",
    },
    {
      id: 18,
      title: "Becoming",
      author: "Michelle Obama",
      price: 22,
      image:
        "https://covers.openlibrary.org/b/title/Becoming-L.jpg",
    },
    {
      id: 19,
      title: "Sapiens",
      author: "Yuval Noah Harari",
      price: 24,
      image:
        "https://covers.openlibrary.org/b/title/Sapiens-L.jpg",
    },
    {
      id: 20,
      title: "The Four Agreements",
      author: "Don Miguel Ruiz",
      price: 15,
      image:
        "https://covers.openlibrary.org/b/title/The%20Four%20Agreements-L.jpg",
    },
  ];

  function addBook(book: Book) {
    if (!wishlist.find((b) => b.id === book.id)) {
      setWishlist([...wishlist, book]);
    }
  }

  function removeBook(id: number) {
    setWishlist(wishlist.filter((b) => b.id !== id));
  }

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="catalog">
      <h2>Book Catalog</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="book-grid">
        {filteredBooks.map((book) => {
          const inWishlist = wishlist.some(
            (b) => b.id === book.id
          );

          return (
            <div className="book-card" key={book.id}>
              <img
                src={book.image}
                alt={book.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://via.placeholder.com/150?text=No+Image";
                }}
              />

              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <p>${book.price}</p>

              {!inWishlist ? (
                <button onClick={() => addBook(book)}>
                  Add to Wishlist
                </button>
              ) : (
                <button onClick={() => removeBook(book.id)}>
                  Remove
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}