import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    sender : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    room:{
        type : String,
        default: 'general'
    },
    recipient:{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : null
    },
    content:{
        type : String,
        required : true
    },
    type : {
        type : String,
        enum : ['text', 'system,'],
        default : 'text'
    },
    isRead : {
        type: Boolean,
        default : false
    },
},{
    timestamps : true
})
// push
export default mongoose.model('Message', messageSchema)