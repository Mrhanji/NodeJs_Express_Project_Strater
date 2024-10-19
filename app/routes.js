import express from 'express'
import {PublisherController} from './publisher/controllers/publisher_controller.js'
const router = express.Router();
const publisherController = new PublisherController();


router.get('/getPublisher/:id', (req, res) => {
  
  res.send('Hello World!')
})



router.put('/updatePublisher', (req, res) => {
  res.send('Hello World!')
})


router.post('/addPublisher', async (req, res) => {
    var result= await publisherController.addPublisher(req,res);
  return result;
})


router.delete('/deletePublisher/:id', (req, res) => {
  res.send('Hello World!')
})





export default router;