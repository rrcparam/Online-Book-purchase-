const API = "http://localhost:5000/wishlist";

export const wishlistRepository = {
  async getAll() {
    const res = await fetch(API);
    return res.json();
  },

  async add(bookId: number) {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId }),
    });
  },

  async remove(id: number) {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  },
};