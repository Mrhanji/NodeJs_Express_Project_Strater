import express from 'express'
import {BookController} from './controllers/books_controller.js'
const router = express.Router();


router.get('/getBook/:id',async (req, res) => {
    return await BookController.getBookById(req, res);
})

router.post('/addBook', async (req, res) => {
    return await BookController.addBook(req, res);

})

export default router;