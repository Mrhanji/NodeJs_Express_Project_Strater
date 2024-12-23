import { SqlService } from '../../../services/mysql/mysql_functions.js';
const SqlServices = new SqlService();

class BookRepo {



        // Function to get all books by filters
     getBookByFilter = async (filters) => {
        // Start building the query
        let query = 'SELECT * FROM tp_books WHERE 1=1';  // 'WHERE 1=1' is a placeholder for conditions
        const params = [];


        // Filter by book_title (partial match)
        if (filters.book_title) {
            query += ' AND book_title LIKE ?';
            params.push(`%${filters.book_title}%`);
        }

        // Filter by book_id (exact match) Thanks!! go ahead
        if (filters.tp_book_id) {
            query += ' AND tp_book_id = ?';
            params.push(filters.tp_book_id);
        }

        // Filter by book_publisher_id (exact match)
        if (filters.book_publisher_id) {
            query += ' AND book_publisher_id = ?';
            params.push(filters.book_publisher_id);
        }

        // Filter by book_year (exact match)
        if (filters.book_year) {
            query += ' AND book_year = ?';
            params.push(filters.book_year);
        }

        // Filter by affiliated_by (partial match)
        if (filters.affiliated_by) {
            query += ' AND affiliated_by LIKE ?';
            params.push(`%${filters.affiliated_by}%`);
        }

        // Filter by board (partial match)
        if (filters.board) {
            query += ' AND board LIKE ?';
            params.push(`%${filters.board}%`);
        }

        // Filter by sku (exact match)
        if (filters.sku) {
            query += ' AND sku = ?';
            params.push(filters.sku);
        }

        // Filter by barcode (exact match)
        if (filters.barcode) {
            query += ' AND barcode = ?';
            params.push(filters.barcode);
        }

        // Filter by mrp (less than or equal to)
        if (filters.mrp) {
            query += ' AND mrp <= ?';
            params.push(filters.mrp);
        }

        // Filter by medium (exact match)
        if (filters.medium) {
            query += ' AND medium = ?';
            params.push(filters.medium);
        }

        // Filter by book_type (exact match)
        if (filters.book_type) {
            query += ' AND book_type = ?';
            params.push(filters.book_type);
        }

        // Filter by book_image (exact match)
        if (filters.book_image) {
            query += ' AND book_image = ?';
            params.push(filters.book_image);
        }

        // Filter by book_author (partial match)
        if (filters.book_author) {
            query += ' AND book_author LIKE ?';
            params.push(`%${filters.book_author}%`);
        }

        // Filter by book_for_class (exact match)
        if (filters.book_for_class) {
            query += ' AND book_for_class = ?';
            params.push(filters.book_for_class);
        }

        // Sorting (if provided)
        if (filters.sortBy) {
            query += ` ORDER BY ${filters.sortBy} ${filters.order || 'ASC'}`;
        }

        // Pagination (limit and offset)
        if (filters.limit && filters.offset) {
            query += ' LIMIT ? OFFSET ?';
            params.push(filters.limit, filters.offset);
        }

         console.log('Generated Query:', query);
         console.log('Query Parameters:', params);

         // Execute the query

        try {
            const results = await SqlServices.getData(query, params);
            if (results.length > 0) {
                return results;
            } else {
                return "No books found for the given filters";
            }
        } catch (err) {
            return "Error getting books by filters: " + err;
        }
    };




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