import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerated } from "../services/IdGenerated";

export default async function createRecipes(req:Request, res: Response): Promise<void> {
    try{
        const { title, description } = req.body

        const token = req.headers.authorization

        if(!title || !description){
            res.status(400).send("Preencha todos os campos")
            throw new Error()
        }

        const tokenData = new Authenticator().getTokenData(token)

        if(!tokenData){
            res.status(401).send("Token invválido ou nulo")
            throw new Error()
        }

        const id: string = new IdGenerated().generatedId() 

        const createdAt = new Date()
        await connection('cookenu_recipes').insert({id, title, description, createdAt, })

        res.status(200).send("Receita cadastrada com sucesso")
    }catch(error){
        res.status(500).send(error.message)
    }
}