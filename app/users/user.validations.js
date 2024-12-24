import Joi  from "joi";

class UserValidations{
  // User insert table schema
    // INSERT INTO `tp_users` (`tp_userId`, `user_name`, `mobile_number`, `user_email`, `user_password`, `user_role`, `is_user_dealer`, `user_remark`, `user_status`, `user_createdAt`, `user_updatedAt`) VALUES ('', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
    static addUser = () => {
        return Joi.object({
            user_name: Joi.string().required(),
            mobile_number: Joi.string().required(),
            user_email: Joi.string().required(),
            user_password: Joi.string().required(),
            user_role: Joi.number().required(),
            is_user_dealer: Joi.string().required(),
            user_remark: Joi.string().required(),
            user_status: Joi.number().required()
        });
    }

}

export default UserValidations;