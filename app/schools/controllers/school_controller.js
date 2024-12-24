import { v4 as uuidv4 } from 'uuid';
import {SchoolRepo} from '../repo/school_repo.js';
import ResponseHandler from '../../../common/response_handler.js';
import SchoolValidations from '../school.validations.js';
const School = new SchoolRepo();


class  SchoolController{

    addSchool = async (req, res) => {
        const { error } = SchoolValidations.addSchool().validate(req.body);
        if(error) {
            return ResponseHandler.error(res, error.details[0].message, 400);
        }
        req.body.tp_school_id =  uuidv4();
        const schoolData = req.body;
        try {
            const result = await School.addSchool(schoolData);
            return ResponseHandler.success(res, result,"Success", 201);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }

    getSchoolByFilter = async (req, res) => {
        // Check if no filters are provided
        if (Object.keys(req.query).length === 0) {
            return ResponseHandler.error(res, "Error: No filters provided", 400);
        }
        try {
            // Call the getSchoolByFilter function from SchoolRepo
            const result = await School.getSchoolByFilter(req.query);
            return ResponseHandler.success(res, result);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }


}

export { SchoolController };