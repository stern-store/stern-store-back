import Joi from "joi";

const passwordScheama = Joi.string().required().min(4);

const emailSchema = Joi.string().email();

const nameSchema = Joi.string().required().min(2).max(50);


export {
    passwordScheama,
    emailSchema,
    nameSchema,
}