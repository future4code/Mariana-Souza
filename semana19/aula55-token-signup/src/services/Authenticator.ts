import { JwtPayload, sign, verify } from "jsonwebtoken"
import { AuthenticationData } from "../types";
import dotenv from 'dotenv'

dotenv.config()

export class Authenticator {

    generateToken = (
        payload: AuthenticationData
    ) => {
        const token = sign(
            payload,
            process.env.JWT_SECRET
        )

        return token;
    }


    getTokenData = (token: string) => {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_SECRET
            ) as JwtPayload

            return {
                id:tokenData.id
            }
        } catch (error) {
            console.log(error)
            return null
        }
    }

}



