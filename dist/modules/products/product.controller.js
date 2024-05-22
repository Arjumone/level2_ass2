"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_services_1 = require("./product.services");
// Create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const result = yield product_services_1.ProductServices.createProduct(productData);
        res.status(201).json({
            success: true,
            message: "Product created successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not create Product!",
            error: err.message
        });
    }
});
// Get all products or search by searchTerm
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        let result;
        if (searchTerm) {
            result = yield product_services_1.ProductServices.getProductsBySearchTerm(searchTerm);
        }
        else {
            result = yield product_services_1.ProductServices.getAllProducts();
        }
        res.status(200).json({
            success: true,
            message: "Products matching search term 'iphone' fetched successfully!",
            data: result
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch Products!",
            error: err.message
        });
    }
});
// Get product by ID
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_services_1.ProductServices.getProductById(productId);
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch Product!",
            error: err.message
        });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updatedProduct = yield product_services_1.ProductServices.updateProductById(productId, req.body);
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Error updating product!",
            error: err.message
        });
    }
});
// Delete product by ID
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const deletedProduct = yield product_services_1.ProductServices.deleteProductById(productId);
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
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Error deleting product!",
            error: err.message
        });
    }
});
exports.ProductController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
};
