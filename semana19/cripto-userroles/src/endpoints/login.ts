import { Request, Response } from "express";
import selectUser from "../data/selectUser";
import { Authenticator } from "../services/Authenticator";
import { user } from "../types";

export default async function login(req: Request, res: Response): Promise<void> {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            throw new Error("Preencha todos os campos");
        }

        if(!email || email.indexOf("@") === -1){
            throw new Error("Digite um e-mail válido")
        } 


        const user = await selectUser(email)

        if (!user || user.password !== password){
            throw new Error("E-mail ou senha inválidos")
        }

        const token = new Authenticator().generateToken({id: user.id})

        res.status(200).send({token})

    }catch(error){
        res.status(400).send(error.message)
    }
}