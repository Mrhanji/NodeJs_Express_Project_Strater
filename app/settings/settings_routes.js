import express from 'express'
const router = express.Router();
import {StatusController} from './status/controller/status_controller.js'
const statusController = new StatusController();



router.post('/addStatus', async (req, res) => {
    return await statusController.addStatus(req, res);
})

router.get('/getStatusByFilter', async (req, res) => {
    return await statusController.getStatusByFilter(req, res);
})

export default router;