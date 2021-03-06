import { connection } from "../connection";
import { Response, Request } from "express";
import { Product } from "../types";

const createProducts = async (req: Request, res: Response) => {
    try {
        const { name, price, quantity, image_url } = req.body

        if (!name || !price || !image_url) {
            throw new Error("Preencha todos os campos");
        }
        const product: Product = {
            id: Date.now().toString(),
            name,
            price,
            quantity,
            image_url
        }
        await connection("labecommerce_products").insert(product)
        res.send({ message: "Produto criado com sucesso!" })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createProducts