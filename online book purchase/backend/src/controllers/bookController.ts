import { Request, Response } from "express";
import { bookService } from "../services/bookService";

export const bookController = {
  async getAll(_req: Request, res: Response) {
    const books = await bookService.getAllBooks();
    res.json(books);
  },

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const book = await bookService.getBookById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
  },

  async create(req: Request, res: Response) {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json(newBook);
  },
};