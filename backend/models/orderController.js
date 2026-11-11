//Farel
import mongoose frome "mongoose";

const oderSchema = new mongoose.Schema({
    userId:{type:String,required:true},
    item:{type:Array,required:true},
    amaount:{type:Number,required:true},
    address:{type:Object,required:true},
    status:{type:String,default: "Food Proccessing"},
    date:{type:Date,default:Date.now()},
    payment:{type:Boolean,default:false}
})

const orderModel = mongoose.models.order || mongoose.model("order",orderSchema);
export default orderModel;
