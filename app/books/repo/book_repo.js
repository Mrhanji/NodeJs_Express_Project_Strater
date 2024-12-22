import { SqlService } from '../../../services/mysql/mysql_functions.js';
const SqlServices = new SqlService();

class BookRepo {

        // Function to get single book by id
        getBookById = async (bookId ) => {
            const query = 'SELECT * FROM tp_books WHERE tp_book_id  = ?';

            return SqlServices.getData(query, [bookId])
                .then(results => {
                    if (results.length > 0) {
                        return results;
                    } else {
                        return "No book found with that id";
                    }
                })
                .catch(err => {
                    return "Error getting book by id: " + err;
                });
        }


        addBook = async (bookData) => {
            // Manually construct the query string
            const keys = Object.keys(bookData).map(key => `${key} = ?`).join(', ');
            const values = Object.values(bookData);
            const fullQuery = `INSERT INTO tp_books SET ${keys}`;
            try {
                return  await SqlServices.insertData(fullQuery,values);
            } catch (err) {
                return "Error adding book: " + err;
            }
        }
}

export {BookRepo};