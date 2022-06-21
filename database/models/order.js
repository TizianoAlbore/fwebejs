import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{
        type:String,
        required: true,
    },
    total:{
        type:Number,
        required:true,
    },
    status:{
        type:Number,
        default: 0,
    }
},
{timestamps:true}
);

export default  mongoose.models.order || mongoose.model("order", orderSchema);