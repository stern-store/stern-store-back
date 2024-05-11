import { Request, Response } from "express"
import { httpStatus } from "../response/https.status.js";
import { signInServices } from "../services/sign-in-service.js";
// import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const signIn = async (req: Request, res: Response) => {
    const { email, password} = req.body;
    
    try {
      const userData = (await signInServices.userDataComparate(email))[0];
      console.log(userData)

      if(!userData){
        return res.sendStatus(httpStatus.UNAUTHORIZED)
      };
      
      const comparate = bcrypt.compareSync(password, userData.password);
      
      if(!comparate){
        return res.sendStatus(httpStatus.UNAUTHORIZED);
      }; 

      // const token = uuidv4();

      const token = jwt.sign({ userId: userData.id},  process.env.JWT_SECRET, {expiresIn: 86400});

      await signInServices.deleteUserSessions(Number(userData.id));

      const session = await signInServices.insertSession(Number(userData.id), token);
      

      if(!session){
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      };
      
      return res.status(httpStatus.OK).send({userId: userData.id, token});

    } catch(error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

export { signIn };