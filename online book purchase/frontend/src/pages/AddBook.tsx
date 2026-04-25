import "./AddBook.css";
import { useState } from "react";
import { SignedIn, SignedOut, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const token = await getToken();

      const response = await fetch("http://localhost:3001/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          author,
          price: Number(price),
          image,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add book");
      }

      setMessage("Book added successfully.");
      navigate("/my-books");
    } catch (error) {
      console.error("Error adding book:", error);
      setMessage("Could not add book.");
    }
  }

  return (
    <section className="add-book-page">
      <h2>Add Book</h2>

      <SignedOut>
        <p>Please log in to add a book.</p>
      </SignedOut>

      <SignedIn>
        <form className="add-book-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />

          <button type="submit">Add Book</button>
        </form>

        {message && <p>{message}</p>}
      </SignedIn>
    </section>
  );
}