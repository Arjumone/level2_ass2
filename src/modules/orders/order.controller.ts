import { Request, Response } from "express";
import { OrderServices } from "./order.service.s";
// import { OrderServices } from "./order.services";

// Create order
const createOrder = async (req: Request, res: Response) => {
    try {
        const orderData = req.body;
        const result = await OrderServices.createOrder(orderData);
        res.status(201).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not create order!",
            error: err.message,
        });
    }
};

// Get orders (all or by email)
const getAllOrders = async (req: Request, res: Response) => {
    try {
        const email = req.query.email as string;

        let result;
        if (email) {
            result = await OrderServices.getOrdersByEmail(email);
            if (result.length === 0) {
                return res.status(404).json({
                    success: false,
                    message: "No orders found for the given email!",
                });
            }
        } else {
            result = await OrderServices.getAllOrders();
        }

        res.status(200).json({
            success: true,
            message: "Orders fetched successfully for user email!",
            data: result,
        });
    } catch (err: any) {
        res.status(500).json({
            success: false,
            message: "Could not fetch orders!",
            error: err.message,
        });
    }
};


export const OrderController = {
    createOrder,
    getAllOrders,
};
