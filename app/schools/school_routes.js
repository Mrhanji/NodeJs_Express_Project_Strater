import express from 'express'
const router = express.Router();
import {SchoolController} from './controllers/school_controller.js'
const schoolController = new SchoolController();

router.post('/addSchool', async (req, res) => {
    return await schoolController.addSchool(req, res);

})

router.get('/getSchoolByFilter', async (req, res) => {
    return await schoolController.getSchoolByFilter(req, res);

})



export  default router;