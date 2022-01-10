import { Request, Response } from 'express';
import { v4 } from 'uuid';
import { UserBusiness } from '../business/UserBusiness';
import { user } from '../model/User'
import { IdGenerator } from '../services/IdGenerator';
import { HashManager } from '../services/HashManager'

export class UserController{
    signup = async (req: Request, res: Response) => {
        try{
            const { name, email, password } = req.body
            
            if (!name || !email || !password) {
                throw new Error("Preencha todos os campos")
            }

            const user: user = {
                id: new IdGenerator().generate(),
                name: name,
                email: email, 
                password: new HashManager().createHash(password)
            }

            await new UserBusiness().signup(user)
            res.send("Usuário criado com sucesso")
        }catch(error){
            res.send({message: error})
        }
    }
}