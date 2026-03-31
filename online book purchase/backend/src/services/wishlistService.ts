import { prisma } from "../prisma";

export const wishlistService = {
  async getAll() {
    return prisma.wishlist.findMany({
      include: { book: true },
    });
  },

  async add(bookId: number) {
    return prisma.wishlist.create({
      data: { bookId },
    });
  },

  async remove(id: number) {
    return prisma.wishlist.delete({
      where: { id },
    });
  },
};