import { Request, Response } from 'express';
import { IdGenerated } from '../services/IdGenerated';
import { user } from '../types';
import connection from '../connection';
import { Authenticator } from '../services/Authenticator';

export default async function signUp(req: Request, res: Response): Promise<void> {
    try{
        
        //validar dados da req
        const { name, nickname, email, password } = req.body

        if(!name || !nickname || !email || !password){
            res.status(400).send("Preencha todos os campos")
        }

        //conectar ao banco de dados
        const id: string = new IdGenerated().generatedId()

        const newUser: user = { id, name, nickname, email, password }

        await connection('cookenu_users').insert(newUser)

        const token = new Authenticator().generateToken({ id })

        res.status(201).send({  newUser, token})
    }catch(error){
        res.status(500).send(error.message)
    }
}