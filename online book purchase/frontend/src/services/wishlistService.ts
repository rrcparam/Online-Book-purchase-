const API = "http://localhost:3001/wishlist";

export const wishlistService = {
  async getAll(userId: string) {
    const res = await fetch(`${API}?userId=${userId}`);
    return res.json();
  },

  async add(bookId: number, userId: string) {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ bookId, userId }),
    });
  },

  async remove(id: number) {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  },
};