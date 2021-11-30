import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserById(req: Request, res: Response){
    try{
    
        //consultar banco de dados
        const user = await selectUserById(req.params.id)

        //validar resposta do banco
        if(!user){
            res.status(404).send("Usuário não encontrado")
        }

        //responder a requisição
        res.status(200)
        // .send(user)
        .send({
            id: user.id,
            nickname: user.nickname
        })
        
    }catch(error){
        res.status(500).send(error.message)
    }
}