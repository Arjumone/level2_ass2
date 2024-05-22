import { Request, Response } from "express";
import { ProductServices } from "./product.services";

// Create product
const createProduct = async (req: Request, res: Response) => {
    try {
        const productData = req.body;
        const result = await ProductServices.createProduct(productData);
        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not create Product!",
            error: err.message 
        });
    }
};

// Get all products or search by searchTerm
const getAllProducts = async (req: Request, res: Response) => {
    try {
        const searchTerm = req.query.searchTerm as string | undefined;
        let result;

        if (searchTerm) {
            result = await ProductServices.getProductsBySearchTerm(searchTerm);
        } else {
            result = await ProductServices.getAllProducts();
        }

        res.status(200).json({
            success: true,
            message: "Products matching search term 'iphone' fetched successfully!",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch Products!",
            error: err.message 
        });
    }
};

// Get product by ID
const getProductById = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const result = await ProductServices.getProductById(productId);

        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch Product!",
            error: err.message 
        });
    }
};

const updateProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params; 
        const updatedProduct = await ProductServices.updateProductById(productId, req.body); 

        if (!updatedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: updatedProduct
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Error updating product!",
            error: err.message
        });
    }
};

// Delete product by ID
const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { productId } = req.params;
        const deletedProduct = await ProductServices.deleteProductById(productId); 

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
                data: null
            });
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Error deleting product!",
            error: err.message
        });
    }
};


export const ProductController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
