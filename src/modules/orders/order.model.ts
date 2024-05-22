import { Schema, model } from "mongoose";

const orderSchema = new Schema<TOrder>({
    email:{
        type:String,
        require:[true,"Name is required"]
    },
    productId:{
        type:String,
        require:[true,"Description is required"]
    },
    price:{
        type:Number,
        require:[true,"Price is required"]
    },
    quantity:{
        type:Number,
        require:[true,"Category is required"]
    }
});

export const Order = model<TOrder>("Order",orderSchema)