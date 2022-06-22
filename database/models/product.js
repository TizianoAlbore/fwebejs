import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nome:{
        type:String,
        required: true,
    },
    prezzo:{
        type:Number,
        required:true,
    }
},
{timestamps:true}
);

export default  mongoose.models.product || mongoose.model("Product", productSchema);