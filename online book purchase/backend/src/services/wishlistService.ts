import { prisma } from "../prisma";

export const wishlistService = {
  async getAll(userId: string) {
    return prisma.wishlist.findMany({
      where: { userId },
      include: { book: true },
    });
  },

  async add(bookId: number, userId: string) {
    return prisma.wishlist.create({
      data: { bookId, userId },
    });
  },

  async remove(id: number) {
    return prisma.wishlist.delete({
      where: { id },
    });
  },
};