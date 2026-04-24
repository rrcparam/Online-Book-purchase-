import { Request, Response } from "express";
import { getAuth } from "@clerk/express";
import { bookService } from "../services/bookService";
import { userService } from "../services/userService";

export const bookController = {
  async getAll(_req: Request, res: Response) {
    const books = await bookService.getAllBooks();
    res.json(books);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ message: "Invalid book id" });
    }

    const book = await bookService.getBookById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  },

  async getMine(req: Request, res: Response) {
    const { userId: clerkId } = getAuth(req);

    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await userService.getOrCreateByClerkId(clerkId);
    const books = await bookService.getBooksByUser(user.id);

    res.json(books);
  },

  async create(req: Request, res: Response) {
    const { userId: clerkId } = getAuth(req);

    if (!clerkId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const user = await userService.getOrCreateByClerkId(clerkId);

    const newBook = await bookService.createBook({
      ...req.body,
      userId: user.id,
    });

    res.status(201).json(newBook);
  },
};