import ResponseHandler from '../../../common/response_handler.js';
import { v4 as uuidv4 } from 'uuid';
import { BookRepo } from '../repo/book_repo.js';

const Book = new BookRepo();

class BookController {
    getBookById = async (req, res) => {
        const bookId = req.params.id;
        try {
            const result = await Book.getBookById(bookId);
            return ResponseHandler.success(res, result);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }

    addBook = async (req, res) => {
        req.body.tp_book_id =  uuidv4();
        const bookData = req.body;
        try {
            const result = await Book.addBook(bookData);
            return ResponseHandler.success(res, result,"Success", 201);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }
}

export { BookController };