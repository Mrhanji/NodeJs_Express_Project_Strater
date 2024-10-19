import Joi from "joi";

class PublisherValidations {
  // Function to validate data for adding a publisher
  static addPublisher() {
    return Joi.object({
      username: Joi.string().alphanum().min(3).max(30).required(),
      email: Joi.string().email().required(),
      age: Joi.number().integer().min(18).max(120)
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

/*
  How to import and use the PublisherValidations class:

  import PublisherValidations from './path/to/publisher.validations.js';

  // To validate data for adding a publisher
  const { error } = PublisherValidations.addPublisher().validate(data);

  // To validate data for updating a publisher
  const { error } = PublisherValidations.updatePublisher().validate(data);
*/