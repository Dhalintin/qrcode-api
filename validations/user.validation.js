const Joi = require('joi');

const userSchemaValidation = Joi.object({
    firstname: Joi.string().min(2).required(),
    lastname: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    address: Joi.string().min(2).required(),
    about: Joi.string().min(2).required(),
    facebook: Joi.string().uri().pattern(/^https:\/\/www.facebook.com\//),
    linkedin: Joi.string().uri().pattern(/^https:\/\/www.linkedin.com\/in\//),
    instagram: Joi.string().uri().pattern(/^https:\/\/www.instagram.com\//),
    twitter: Joi.string().uri().allow(/^.+https:\/\/www.twitter.com\//),
    whatsapp: Joi.string().uri().pattern(/^https:\/\/wa.me\//),
    telegram: Joi.string().uri().pattern(/^https:\/\/t.me\//),

});

module.exports = { userSchemaValidation };
