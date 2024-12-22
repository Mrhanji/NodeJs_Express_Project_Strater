import Joi from "joi";

class PublisherValidations {
  // Function to validate data for adding a publisher

  static addPublisher() {
    return Joi.object({
      tp_publisher_id: Joi.string().uuid().required(),
      publisher_name: Joi.string().alphanum().min(3).max(50).required(),
      primary_user: Joi.string().alphanum().min(3).max(30).required(),
      address: Joi.string().min(3).max(100).required(),
      mobile: Joi.string().pattern(/^[0-9]{10}$/).required(), // 10-digit mobile validation
      since: Joi.string().isoDate().optional(), // ISO date format for 'since'
      legal_name: Joi.string().min(3).max(50).required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(6).max(30).required(),
      status: Joi.number().integer().valid(0, 1).required(), // 0 for inactive, 1 for active
      wallet_amount: Joi.number().precision(2).default(0),
      previous_wallet_amount: Joi.number().precision(2).default(0)
    });
  }


  // Function to validate data for updating a publisher
  static updatePublisher() {
    return Joi.object({
      username: Joi.string().alphanum().min(3).max(30),
      email: Joi.string().email(),
      age: Joi.number().integer().min(18).max(120)
    });
  }
}

export default PublisherValidations;

