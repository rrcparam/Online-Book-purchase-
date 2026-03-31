const API = "http://localhost:3001/wishlist";

export const wishlistService = {
  async getWishlist() {
    const res = await fetch(API);
    return res.json();
  },

  async addToWishlist(book: any) {
    await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    });
  },

  async removeFromWishlist(id: number) {
    await fetch(`${API}/${id}`, {
      method: "DELETE",
    });
  },
};