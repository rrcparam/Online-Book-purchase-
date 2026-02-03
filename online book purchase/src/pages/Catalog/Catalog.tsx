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
      "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 15,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    price: 20,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41g6YNrmLQL._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 17,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 16,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg",
  },
  {
    id: 6,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    price: 22,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81%2BWxQd6xLL.jpg",
  },
  {
    id: 7,
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: 21,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81fbjDEuewL.jpg",
  },
  {
    id: 8,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    price: 19,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/41zoxGk5r+L._SX331_BO1,204,203,200_.jpg",
  },
  {
    id: 9,
    title: "Start With Why",
    author: "Simon Sinek",
    price: 18,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg",
  },
  {
    id: 10,
    title: "How to Win Friends & Influence People",
    author: "Dale Carnegie",
    price: 14,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71KD6gSE1BL.jpg",
  },
  {
    id: 11,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 20,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71rw3sx4e3L.jpg",
  },
  {
    id: 12,
    title: "Ikigai",
    author: "Héctor García",
    price: 13,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81exAO7KWyL.jpg",
  },
  {
    id: 13,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 17,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
  },
  {
    id: 14,
    title: "Zero to One",
    author: "Peter Thiel",
    price: 21,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
  },
  {
    id: 15,
    title: "The Lean Startup",
    author: "Eric Ries",
    price: 19,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg",
  },
  {
    id: 16,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 18,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71g2ednj0JL.jpg",
  },
  {
    id: 17,
    title: "Educated",
    author: "Tara Westover",
    price: 20,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
  },
  {
    id: 18,
    title: "Becoming",
    author: "Michelle Obama",
    price: 22,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg",
  },
  {
    id: 19,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 24,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
  },
  {
    id: 20,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    price: 15,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81VStYnDGrL.jpg",
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
