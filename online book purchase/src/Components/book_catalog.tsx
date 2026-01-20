import "./book_catalog.css";

type Book = {
  id: number;
  title: string;
  author: string;
  price: number;
};
 
export default function BookList() {
  const books: Book[] = [
    { id: 1, title: "Atomic Habits", author: "James Clear", price: 18 },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", price: 15 },
    { id: 3, title: "Deep Work", author: "Cal Newport", price: 20 },
  ];
 
  return (
    <section>
      <h2>Available Books</h2>
 
      <div className="book-grid">
        {books.map((book) => (
          <div className="book-card" key={book.id}>
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>${book.price}</p>
            <button>Buy</button>
          </div>
        ))}
      </div>
    </section>
  );
}