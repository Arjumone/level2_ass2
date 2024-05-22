import express, { Request, Response } from "express";
import { Product } from "./product.model";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/",ProductController.createProduct)
router.get("/",ProductController.getAllProducts)
router.get("/:productId",ProductController.getProductById)  
router.put("/:productId", ProductController.updateProduct)
router.delete("/:productId", ProductController.deleteProduct)

export const ProductRoutes = router;