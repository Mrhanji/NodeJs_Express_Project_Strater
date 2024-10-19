import PublisherValidations from '../publisher.validations.js';
import ResponseHandler from '../../../common/response_handler.js';
import {PublisherRepo} from '../repo/publisher_repo.js';
const Publisher = new PublisherRepo();


class PublisherController{

    addPublisher = async (req, res) => {
        const { error } = PublisherValidations.addPublisher().validate(req.body);
        if (error) {
            return ResponseHandler.error(res, error.details[0].message, 400);
        }
        const publisherData = req.body;
        console.log("publisherData",publisherData)
        try {
            const result = await Publisher.addPublisher(publisherData);
            return ResponseHandler.success(res, result, 201);
        } catch (err) {
           console.log("error",err)
            return ResponseHandler.error(res, err, 500);
        }
    }
    
    

}

export {PublisherController};