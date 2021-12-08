import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   try {
      const name = req.query.name || '%'
      const type = req.params.type || '%'
      const sort = req.query.sort === 'type' ? 'type' : 'name'
      const order = req.query.order === 'ASC' ? 'ASC' : 'DESC'
      const page = Number(req.params.page) || 1


      const users = await selectAllUsers(name, type, sort, order, page)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

//endpoint com todos os filtros, ordenação e paginação
async function selectAllUsers(name, type, sort, order, page):Promise<any> {
   const result = await connection('aula49_exercicio')
   .where('name', 'LIKE', `%${name}%`)
   .orWhere('type', 'LIKE', `%${type}%`)
   .orderBy(sort, order)
   .limit(5)
   .offset(5*(page-1))

   return result;
}
