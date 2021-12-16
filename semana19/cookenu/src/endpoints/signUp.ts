import { Request, Response } from 'express';
import { IdGenerated } from '../services/IdGenerated';
import { user } from '../types';
import connection from '../connection';
import { Authenticator } from '../services/Authenticator';
import { HashManager } from '../services/HashManager';

export default async function signUp(req: Request, res: Response): Promise<void> {
    try{
        
        //validar dados da req
        const { name, nickname, email, password } = req.body

        if(!name || !nickname || !email || !password){
            res.status(400).send("Preencha todos os campos")
        }

        //verificar se email e nickname ja cadastrado

        let [user] = await connection('cookenu_users').where({ email })

        if(user){
            res.statusCode = 409
            throw new Error('E-mail já cadastrado')
        }

        [user] = await connection('cookenu_users').where({ nickname })

        if(user){
            res.statusCode = 409
            throw new Error('Nome de usuário já cadastrado')
        }

        //conectar ao banco de dados
        const id: string = new IdGenerated().generatedId()

        const cypherPassword: string = new HashManager().createHash(password)

        const newUser: user = { id, name, nickname, email, password: cypherPassword }

        await connection('cookenu_users').insert(newUser)

        const token = new Authenticator().generateToken({ id })

        res.status(201).send({  newUser, token})
    }catch(error){
        res.status(500).send(error.message)
    }
}