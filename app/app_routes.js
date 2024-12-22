import express from 'express'
const router= express.Router();
import bookRoutes from './books/books_routes.js';
import publisherRoutes from './publisher/publisher_routes.js';



// Publisher routes
router.use('/publisher', publisherRoutes);

// Book routes
router.use('/books', bookRoutes);



export default  router;