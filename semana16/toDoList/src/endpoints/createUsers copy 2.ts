import { Request, Response } from "express";

export default async function createUser(req: Request, res: Response){
    try{
        //validar parametros da requisição

        //consultar o banco de dados

        //validar respostas do banco

        //responder/encerrar a requisição
    }catch(error){
        res.status(500).send(error.message)
    }
}