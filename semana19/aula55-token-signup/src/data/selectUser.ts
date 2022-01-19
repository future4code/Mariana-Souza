import { connection } from "../connection";

const selectUser = async(email: string): Promise<any> => {
    const result = await connection('autenticacao_user')
      .select("*")
      .where({ email });
 
    return result[0];
   }
 
   export default selectUser;