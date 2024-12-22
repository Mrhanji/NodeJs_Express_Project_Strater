import PublisherValidations from '../publisher.validations.js';
import ResponseHandler from '../../../common/response_handler.js';
import {PublisherRepo} from '../repo/publisher_repo.js';
const Publisher = new PublisherRepo();
import { v4 as uuidv4 } from 'uuid';


class PublisherController {

    addPublisher = async (req, res) => {
        req.body.tp_publisher_id =  uuidv4();
        const { error } = PublisherValidations.addPublisher().validate(req.body);
        if (error) {
            return ResponseHandler.error(res, error.details[0].message, 400);
        }
        const publisherData = req.body;
        try {
            const result = await Publisher.addPublisher(publisherData);
            return ResponseHandler.success(res, result,"Success", 201);
        } catch (err) {
           console.log("error",err)
            return ResponseHandler.error(res, err, 500);
        }
    }



    getPublisherById = async (req, res) => {
        const publisherId = req.params.id;
        try {
            const result = await Publisher.getPublisherById(publisherId);
            return ResponseHandler.success(res, result,);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }
    
    

}

export {PublisherController};