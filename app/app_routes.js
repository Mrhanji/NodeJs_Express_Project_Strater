import express from 'express'
const router= express.Router();
import bookRoutes from './books/books_routes.js';
import publisherRoutes from './publisher/publisher_routes.js';
import schoolRoutes from './schools/school_routes.js';
import userRoutes from './users/user_routes.js';
import settingsRoutes from './settings/settings_routes.js';



// Publisher routes
router.use('/publisher', publisherRoutes);

// Book routes
router.use('/books', bookRoutes);

// School routes
router.use('/school', schoolRoutes);


// User routes
router.use('/user', userRoutes);

// Settings routes
router.use('/settings', settingsRoutes);


export default  router;