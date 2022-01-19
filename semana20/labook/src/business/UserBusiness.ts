import { UserDatabase } from "../data/UserDatabase";
import { authenticationData, user, userCredentials } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export class UserBusiness{
    signup = async (user: user): Promise<string> => {
        const token = await new UserDatabase().signup(user)
        
        return token
    }

    login = async (email: string, password: string) => {
        const [user] = await new UserDatabase().login(email)
        
        const passwordIsCorrect: boolean = new HashManager().compareHash(password, user.password)

        if(!user || !passwordIsCorrect){
            return ("Preencha todos os campos corretamente")
        }else{
            const token = new Authenticator().generateToken({id:user.id})
            return token
        }

    }
}