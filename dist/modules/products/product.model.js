"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const variantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        require: true,
    },
    value: {
        type: String,
        require: true
    }
});
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: [true, "Name is required"]
    },
    description: {
        type: String,
        require: [true, "Description is required"]
    },
    price: {
        type: Number,
        require: [true, "Price is required"]
    },
    category: {
        type: String,
        require: [true, "Category is required"]
    },
    tags: {
        type: [String],
        require: true
    },
    variants: {
        type: [variantsSchema]
    },
    inventory: {
        type: Object
    }
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
