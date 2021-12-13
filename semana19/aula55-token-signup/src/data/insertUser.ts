import { connection } from "../connection"


const insertUser = async (id: string, email: string, password: string) => {
    await connection('autenticacao_user')
      .insert({
        id,
        email,
        password,
      })
  };
  export default insertUser