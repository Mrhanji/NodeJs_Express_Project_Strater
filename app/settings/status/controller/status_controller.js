import {StatusRepo} from './../repo/status_repo.js'
import ResponseHandler from '../../../../common/response_handler.js'
const status = new StatusRepo();

class  StatusController {

    addStatus = async (req, res) => {
        try {
            const result = await status.addStatus(req.body);
            return ResponseHandler.success(res, result,"Success", 201);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }

    getStatusByFilter = async (req, res) => {
        // Check if no filters are provided
        if (Object.keys(req.query).length === 0) {
            return ResponseHandler.error(res, "Error: No filters provided", 400);
        }
        try {
            // Call the getStatusByFilter function from StatusRepo
            const result = await status.getStatusByFilter(req.query);
            return ResponseHandler.success(res, result);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }

}

export   {StatusController}