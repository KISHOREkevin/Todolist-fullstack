import mongoose from "mongoose";
const taskSchema = mongoose.Schema({
    taskname:{
        type:String,
        required:true
    },
    taskdescription:{
        type:String,
        required:true
    },
    taskdate:{
        type:String,
        required:true
    }


})

export default taskSchema;