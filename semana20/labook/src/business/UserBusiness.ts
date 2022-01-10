import { UserDatabase } from "../data/UserDatabase";
import { user } from "../model/User";

export class UserBusiness{
    signup = async (user: user): Promise<void> => {
        await new UserDatabase().signup(user)
    }
}