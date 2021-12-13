import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateId } from "../services/generateId";
import { Authenticator } from "../services/Authenticator";
import { user } from "../types";

export default async function createUser (req: Request, res: Response): Promise<void>{
    try{
            // Item b. Validação do email
            if (!req.body.email || req.body.email.indexOf("@") === -1) {
              throw new Error("Invalid email");
            }
        
            // Item c. Validação da senha
            if (!req.body.password || req.body.password.length < 6) {
              throw new Error("Invalid password");
            }
        
            const newUser: user = {
              email: req.body.email,
              password: req.body.password,
            };

            const id = generateId();

            await insertUser(id, newUser.email, newUser.password);

            const token =  new Authenticator().generateToken({id});

            res.status(200).send({newUser, token});


    }catch(error){
        res.status(400).send(error.message)
    }
}