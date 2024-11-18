const Book = require('../models/Book');

// Create a new book
exports.createBook = async (req, res) => {
    try {
        const { ISBN, author, title, is_checked_out, genre} = req.body;
        const newBook = new Book({ ISBN, author, title, is_checked_out, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        console.error('Error creating book:', error.message);
        res.status(500).json({ error: error.message });
    }
};


// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a book
exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json(updatedBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) return res.status(404).json({ error: 'Book not found' });
        res.status(200).json({ message: `Book deleted successfully with id = ${id} and ISBN = ${deletedBook.ISBN} and title = ${deletedBook.title}` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
