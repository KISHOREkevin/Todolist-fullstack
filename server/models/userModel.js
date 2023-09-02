import mongoose from "mongoose";
import taskSchema from "./taskModel.js";
const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    userpassword:{
        type:String,
        required:true
    },
    usertasks:[taskSchema]
})
const Task = mongoose.model("Task",taskSchema);
const User = mongoose.model("User",userSchema);

export {Task,User};