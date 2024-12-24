import { v4 as uuidv4 } from 'uuid';
import ResponseHandler from '../../../common/response_handler.js';
import {UserRepo} from '../repo/user_repo.js';
import UserValidations from '../user.validations.js';
const User = new UserRepo();


class  UserController{

    addUser = async (req, res) => {
        const { error } = UserValidations.addUser().validate(req.body);
        if(error) {
            return ResponseHandler.error(res, error.details[0].message, 400);
        }
        req.body.tp_userId =  uuidv4();
        const userData = req.body;
        try {
            const result = await User.addUser(userData);
            return ResponseHandler.success(res, result,"Success", 201);
        } catch (err) {
            return ResponseHandler.error(res, err, 500);
        }
    }

}

export { UserController };