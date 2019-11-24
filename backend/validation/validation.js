const Joi = require('@hapi/joi');



const registrationValidation = (data) => {

    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .required(),

        password: Joi.string()
            .min(4)
            .required()
            .pattern(/^[a-zA-Z0-9]{4,30}$/),
    })

    return schema.validate(data)
}


const postValidation = (data) => {

    const schema = Joi.object({
        title: Joi.string()
            .min(3)
            .required(),

        body: Joi.string()
            .min(15)
            .max(250)
            .required()

    })

    return schema.validate(data)
}


module.exports.registrationValidation = registrationValidation;
module.exports.postValidation = postValidation;