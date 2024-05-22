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
exports.OrderController = void 0;
const order_service_s_1 = require("./order.service.s");
// import { OrderServices } from "./order.services";
// Create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orderData = req.body;
        const result = yield order_service_s_1.OrderServices.createOrder(orderData);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not create order!",
            error: err.message,
        });
    }
});
// Get orders (all or by email)
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        let result;
        if (email) {
            result = yield order_service_s_1.OrderServices.getOrdersByEmail(email);
            if (result.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No orders found for the given email!",
                });
            }
        }
        else {
            result = yield order_service_s_1.OrderServices.getAllOrders();
        }
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch orders!",
            error: err.message,
        });
    }
});
exports.OrderController = {
    createOrder,
    getAllOrders,
};
