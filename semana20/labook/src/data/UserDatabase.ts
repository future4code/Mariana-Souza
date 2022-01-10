import { BaseDatabase } from "./BaseDatabase";
import { user } from '../model/User'

export class UserDatabase extends BaseDatabase{
    signup = async (user: user): Promise<void> => {
        await this.connection("labook_users").insert(user)
    }
}