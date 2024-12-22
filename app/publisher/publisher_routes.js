import express from 'express'
import {PublisherController} from './controllers/publisher_controller.js'
const router = express.Router();
const publisherController = new PublisherController();


router.get('/getPublisher/:id',async (req, res) => {
    return await publisherController.getPublisherById(req,res);
})



router.put('/updatePublisher', (req, res) => {
    res.send('Hello World!')
})


router.post('/addPublisher', async (req, res) => {
    return await publisherController.addPublisher(req,res);

})


router.delete('/deletePublisher/:id', (req, res) => {
    res.send('Hello World!')
})





export default router;