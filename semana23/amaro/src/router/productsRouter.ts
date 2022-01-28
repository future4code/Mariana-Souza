import { Router } from "express";
import { ProductsController } from "../controller/ProductsController";


export const productsRouter = Router();

const productsController = new ProductsController()

productsRouter.post("/register", productsController.registerProducts)

