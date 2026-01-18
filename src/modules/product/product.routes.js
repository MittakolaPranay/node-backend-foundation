
import { Router } from "express";
import { getAllProducts } from "./product.controller.js";

const productRoutes = Router();

productRoutes.get("/",getAllProducts);

export default productRoutes;