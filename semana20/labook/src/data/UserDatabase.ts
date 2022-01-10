import { BaseDatabase } from "./BaseDatabase";
import { authenticationData, user, userCredentials } from '../model/User'
import { Authenticator } from "../services/Authenticator";

export class UserDatabase extends BaseDatabase{
    signup = async (user: user): Promise<string> => {
        await this.connection("labook_users").insert(user)
        const token = new Authenticator().generateToken({id: user.id})
        return token
    }

    login = async (email: string) => {
        const user = await this.connection("labook_users").select("*").where(email)
        return user
    }
}