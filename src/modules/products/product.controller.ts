import { Request, Response } from "express"
import { ProductServices } from "./product.services"

//create product
const createProduct =  async(req:Request,res:Response)=>{
  
    const productData = req.body;
    const result = await ProductServices.createProduct(productData)
   
    res.json({
        "success": true,
    "message": "Product created successfully!",
    
    })
};

//get product
const getAllProducts =async(req:Request,res:Response)=>{
    try{
        const result = await ProductServices.getAllProducts(req.query);

        res.status(200).json({
            success:true,
            message:"Products fetched successfully!",
            data:result,
        });
    }
    catch(err:any){
        res.status(500).json({
            success:false,
            message:"Could not fetch Product!",
            error:err,
        })
    }
}

export const ProductController ={
    createProduct,
    getAllProducts
}