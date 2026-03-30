// frontend/src/repositories/bookRepository.ts

export const bookRepository = {
  async getAllBooks() {
    const res = await fetch("http://localhost:3001/books");

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    return res.json();
  },

  async createBook(book: any) {
    const res = await fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });

    if (!res.ok) {
      throw new Error("Failed to create book");
    }

    return res.json();
  },
};