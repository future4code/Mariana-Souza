import { UserDatabase } from "../data/UserDatabase";
import { authenticationData, user, userCredentials } from "../model/User";
import { HashManager } from "../services/HashManager";

export class UserBusiness{
    signup = async (user: user): Promise<string> => {
        const token = await new UserDatabase().signup(user)
        
        return token
    }

    login = async (email: string, password: string) => {
        const user = await new UserDatabase().login(email)
        return user
        // const isUser = new HashManager().compareHash(userCredentials.password, )
        // const token = 
    }
}