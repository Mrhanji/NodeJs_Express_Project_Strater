import Joi from 'joi';
// School insert table schema
///INSERT INTO `tp_schools` (`tp_school_id`, `tp_school_name`, `tp_school_address`, `primary_user`, `school_status`, `school_email`, `school_password`, `createdBy`, `created_at`, `update_at`, `school_type`, `school_contact_number`, `school_edu_medium`) VALUES ('', '', '', '', '', '', '', '', current_timestamp(), current_timestamp(), '', '', '')

class  SchoolValidations{
    static  addSchool = () => {
        return Joi.object({
            tp_school_name: Joi.string().required(),
            tp_school_address: Joi.string().required(),
            primary_user: Joi.string().required(),
            school_status: Joi.number().required(),
            school_email: Joi.string().required(),
            school_password: Joi.string().required(),
            createdBy: Joi.string().required(),
            created_at: Joi.date().required(),
            update_at: Joi.date().required(),
            school_type: Joi.string().required(),
            school_contact_number: Joi.string().required(),
            school_edu_medium: Joi.string().required()
        });
    }
}

export default  SchoolValidations;