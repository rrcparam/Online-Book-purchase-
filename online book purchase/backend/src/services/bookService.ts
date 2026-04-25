import { prisma } from "../prisma";

type CreateBookInput = {
  title: string;
  author: string;
  price: number;
  image: string;
};

export const bookService = {
  async getAllBooks() {
    return prisma.book.findMany();
  },

  async getBookById(id: number) {
    return prisma.book.findUnique({
      where: { id },
    });
  },
    
  async createBook(data: CreateBookInput) {
    return prisma.book.create({
      data,
    });
  },
    async getBooksByUser(userId: number) {
    return prisma.book.findMany({
      where: { userId },
    });
  }
};
 