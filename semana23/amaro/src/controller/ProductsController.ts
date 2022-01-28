import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { ProductsInputDTO } from "../model/Products";

export class ProductsController {

    async registerProducts(req: Request, res: Response) {
        try {
            const { name, tags } = req.body;

            const input: ProductsInputDTO = {
                name,
                tags
            }

         
            const message = await new ProductsBusiness().registerProduct(input)

            res.status(200).send({message})
        
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ message: error.message })
            } else {
                res.status(400).send({ message: "Unexpected Error !" })
            }
        }
    }


}