import express from "express";
import {
  createBookController,
  deleteBookController,
  getBookController,
  updateBookController,
} from "../controllers/bookController.js";

const router = express.Router();

// post request for creating a book
router.post("/books", createBookController);

// get request for fetching all books
router.get("/books", getBookController);

//put request for updating a book
router.put("/books/:id", updateBookController);

//delete request for deleting a book
router.delete("/books/:id", deleteBookController);

export default router;
