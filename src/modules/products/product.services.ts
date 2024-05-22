import { Product } from "./product.model";

const createProduct = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result;
};

const getAllProducts = async () => {
    const result = await Product.find();
    return result;
};

const getProductById = async (id: string) => {
    const result = await Product.findById(id);
    return result;
};


const getProductsBySearchTerm = async (searchTerm: string) => {
    const result = await Product.find({ $text: { $search: searchTerm } });
    return result;
};

const updateProductById = async (id: string, payload: Partial<TProduct>) => {
    const result = await Product.findByIdAndUpdate(id, payload, { new: true });
    return result;
};

const deleteProductById = async (id: string) => {
    const result = await Product.findByIdAndDelete(id);
    return result;
};

export const ProductServices = {
    createProduct,
    getAllProducts,
    getProductById,
    getProductsBySearchTerm,
    updateProductById,
    deleteProductById
};
