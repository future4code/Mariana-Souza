import { ProductsInsertDTO } from "../model/Products";
import { BaseDataBase } from "./BaseDataBase";

export class ProductsData extends BaseDataBase {

    private static TABLE_NAME = "products_amaro"


    async insertUser(products: ProductsInsertDTO): Promise<string> {
        try {

            const { id, name, tags } = products

            await this.getConnection().insert({
                id,
                name,
                tags
            }).into(ProductsData.TABLE_NAME)

            return "Usuario criado com sucesso"
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Erro do banco !")
            }
        }
    }
}