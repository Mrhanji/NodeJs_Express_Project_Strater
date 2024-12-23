import express from 'express'
import {BookController} from './controllers/books_controller.js'
const router = express.Router();
const bookController = new BookController();



router.post('/addBook', async (req, res) => {
    return await bookController.addBook(req, res);
})

router.get('/getBookByFilter', async (req, res) => {
    return await bookController.getBookByFilter(req, res);
})



export default router;