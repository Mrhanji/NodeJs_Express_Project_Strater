import ResponseHandler from '../../../common/response_handler.js';
import { v4 as uuidv4 } from 'uuid';
import { BookRepo } from '../repo/book_repo.js';
import BookValidations from '../books.validations.js';
const Book = new BookRepo();


class BookController {


    getBookByFilter = async (req, res) => {

        // Check if no filters are provided
        if (Object.keys(req.query).length === 0) {
            return ResponseHandler.error(res, "Error: No filters provided", 400);
        }
        try {
            const result = await Book.getBookByFilter(req.query);
            return ResponseHandler.success(res, result);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }

    addBook = async (req, res) => {

        const { error } = BookValidations.addBook().validate(req.body);
        if(error) {
            return ResponseHandler.error(res, error.details[0].message, 400);
        }
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