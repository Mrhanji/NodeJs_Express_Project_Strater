/// Sql table name: books
// here is table insert query
// INSERT INTO `tp_books` (`tp_book_id`, `book_title`, `book_info`, `book_publisher_id`, `book_year`, `affiliated_by`, `board`, `sku`, `barcode`, `mrp`, `medium`, `book_type`, `book_image`, `book_author`, `book_for_class`, `book_status`, `created_by`, `created_at`, `update_at`) VALUES ('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', current_timestamp(), current_timestamp())

import Joi from "joi";

class BookValidations {
    // Function to validate data for adding a book

    static addBook() {
        return Joi.object({
        book_title: Joi.string().min(3).max(50).required(),
        book_info: Joi.string().min(3).max(100).required(),
        book_publisher_id: Joi.string().uuid().required(),
        book_year: Joi.string().min(3).max(50).required(),
        affiliated_by: Joi.string().min(3).max(100).required(),
        board: Joi.string().min(3).max(100).required(),
        sku: Joi.string().min(3).max(100).required(),
        barcode: Joi.string().min(3).max(100).required(),
        mrp: Joi.number().precision(2).required(),
        sale_price: Joi.number().precision(2).required(),
        medium: Joi.string().min(3).max(100).required(),
        book_type: Joi.string().min(3).max(100).required(),
        book_image: Joi.string().min(3).max(100).required(),
        book_author: Joi.string().min(3).max(100).required(),
        book_for_class: Joi.string().min(1).max(100).required(),
        book_status: Joi.number().integer().valid(0, 1).required(), // 0 for inactive, 1 for active
        created_by: Joi.string().uuid().required()
        });
    }
}

export default BookValidations;