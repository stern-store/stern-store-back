import { Request, Response } from "express"
import { httpStatus } from "../response/https.status.js";
import { signInServices } from "../services/sign-in-service.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";


const signIn = async (req: Request, res: Response) => {
    const { email, password} = req.body;
    
    try {
      const userData = await signInServices.userDataComparate(email);

      if(!userData[0]){
        return res.sendStatus(httpStatus.UNAUTHORIZED)
      };
      
      const comparate = bcrypt.compareSync(password, userData[0].password);
      
      if(!comparate){
        return res.sendStatus(httpStatus.UNAUTHORIZED);
      };

      const token = uuidv4();
      
      const deleteSessions = await signInServices.deleteSessions(Number(userData[0].id));

      if(deleteSessions) {
        const session = await signInServices.insertSession(Number(userData[0].id), token);

        if(!session){
          return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
        };
      };
      
      return res.status(httpStatus.OK).send({token});

    } catch(error) {
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    };
};

export { signIn };