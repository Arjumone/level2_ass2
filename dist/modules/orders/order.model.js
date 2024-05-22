"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        require: [true, "Name is required"]
    },
    productId: {
        type: String,
        require: [true, "Description is required"]
    },
    price: {
        type: Number,
        require: [true, "Price is required"]
    },
    quantity: {
        type: Number,
        require: [true, "Category is required"]
    }
});
exports.Order = (0, mongoose_1.model)("Order", orderSchema);
