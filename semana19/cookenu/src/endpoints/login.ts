import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function login(req:Request, res: Response): Promise<void> {
    try {
        
        //validar dados
        const { email, password } = req.body

        if( !email || !password){
            res.statusCode = 422
            throw new Error("Preencha todos os campos")
        }

        //verificar se usuario existe
        const [user] = await connection("cookenu_users").where({ email })

        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

        if(!user || !passwordIsCorrect){
            res.status(401).send("Preencha todos os campos")
        }

        const token = new Authenticator().generateToken({
            id: user.id
        })

        res.status(200).send({ message: `Boas vindas, ${user.nickname}`, token })
    }catch(error){
        res.status(500).send(error.message)
    }
}