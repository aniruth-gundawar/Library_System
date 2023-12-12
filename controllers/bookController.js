import bookModel from "../models/bookModel.js";

// controller for creating a book
export const createBookController = async (req, res) => {
  try {
    const { name, description, author, ISBN, price, quantity } = req.body;
    if (!name) {
      return res.status(500).send({ message: "Name is required" });
    }
    if (!description) {
      return res.status(500).send({ message: "Description is required" });
    }
    if (!author) {
      return res.status(500).send({ message: "Author is required" });
    }
    if (!ISBN) {
      return res.status(500).send({ message: "ISBN is required" });
    }
    if (!price) {
      return res.status(500).send({ message: "Price is required" });
    }
    if (!quantity) {
      return res.status(500).send({ message: "Quantity is required" });
    }

    const book = new bookModel({
      name,
      description,
      author,
      ISBN,
      price,
      quantity,
    }).save();
    res.status(201).send({
      success: true,
      message: "Book Created  Successfully",
      book,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in Creating Book",
    });
  }
};

// controller for fetching all books
export const getBookController = async (req, res) => {
  try {
    const books = await bookModel.find({});

    res.status(200).send({
      success: true,
      message: "All Books",
      books,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error in getting Book",
    });
  }
};

// controller for updating  a book
export const updateBookController = async (req, res) => {
  try {
    const { name, description, author, ISBN, price, quantity } = req.body;

    if (!name) {
      return res.status(500).send({ message: "Name is required" });
    }
    if (!description) {
      return res.status(500).send({ message: "Description is required" });
    }
    if (!author) {
      return res.status(500).send({ message: "Author is required" });
    }
    if (!ISBN) {
      return res.status(500).send({ message: "ISBN is required" });
    }
    if (!price) {
      return res.status(500).send({ message: "Price is required" });
    }
    if (!quantity) {
      return res.status(500).send({ message: "Quantity is required" });
    }

    const id = req.params.id;

    const book = await bookModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    await book.save();
    res.status(200).send({
      success: true,
      message: "Book Updated Successfully",
      book,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error,
      message: "Error while updating Book",
    });
  }
};

// controller for deleting  a book
export const deleteBookController = async (req, res) => {
  try {
    await bookModel.findOneAndDelete({ _id: req.params.id });
    res.status(200).send("Book Deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
};
