import { Request, Response } from "express";
import { httpStatus } from "../response/https.status.js";
import bcrypt from "bcrypt";

import { passwordScheama, emailSchema, nameSchema } from "../schemas/schemas.js";
import { signUpServices } from "../services/sign-up-service.js";

const signUp = async (req: Request, res: Response) => {
    const {name, email, password} = req.body;
    
    if (!name || !email || !password) {
        return res.sendStatus(httpStatus.BAD_REQUEST);    
    };

    try {
        const validatePassword = passwordScheama.validate(password, {abortEarly: false});
        const validateEmail = emailSchema.validate(email, {abortEarly: false});
        const validateName = nameSchema.validate(name, {abortEarly: false});

        if(validatePassword.error || validateEmail.error || validateName.error ){
            return res.status(httpStatus.BAD_REQUEST);
        };
        
        const cryptography = bcrypt.hashSync(password , 13 );
        const users = await signUpServices.userIsRegistered(email);

        if(users[0]) {
            return res
                .status(httpStatus.BAD_REQUEST)
                .send({message: "E-mail already registered"});
        }
        
        const insertUser = await signUpServices.insertUser(name, email, cryptography)

        if(insertUser) {
            return res.sendStatus(httpStatus.CREATED);
        }
    } catch(error){
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

export { signUp };