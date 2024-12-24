import express from 'express'
const router = express.Router();
import {UserController} from './controller/user_controller.js'
const userController = new UserController();

router.post('/addUser', async (req, res) => {
    return await userController.addUser(req, res);
})

export default router;

