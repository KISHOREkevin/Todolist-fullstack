import {User,Task} from "../models/userModel.js";

import mongoose from "mongoose";

export const getAllTasks = async (req,res)=>{
    let user;
    let tasks;
    let {id} = req.params;
    try {
        user = await User.findById(id);
        tasks = await user.usertasks;
        return res.status(200).json({tasks})
       

    } catch (error) {
        console.log(error.message);
    }
}

export const getOneTask = async (req,res)=>{
    const {id,taskId} = req.params;
    let task;
    let user;
    try {
        user = await User.findById(id);
        task = await user.usertasks.filter((t)=>{
            return t._id == taskId;
        })
        return res.status(200).json({task});
    } catch (error) {
        console.log(error.message);
    }
}

export const createTask = async (req,res)=>{
    const {id} = req.params;
    let {taskname,taskdescription} = req.body;
    let taskdate = new Date().toLocaleDateString();
    let task;
    let user;
    try {
        task = new Task({
            taskname,
            taskdescription,
            taskdate
        })
        user = await User.findById(id);
        await user.usertasks.push(task);
        await user.save();
        return res.status(200).json({task:user.usertasks});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTask = async (req,res)=>{
    const {id} = req.params;
    const {taskId} = req.params;
   
    try {
       await User.findByIdAndUpdate(id,{$pull:{usertasks:{_id:taskId}}});
       return res.status(200).json({message:"Task deleted successfully ..."});

    } catch (error) {
        console.log(error.message);
    }

}

export const updateTask = async (req,res)=>{
    const {id}= req.params;
    const {taskId} = req.params;
    let {taskname,taskdescription} = req.body;
    let taskdate = new Date().toLocaleDateString();
    try {
        await User.updateOne({_id:id,"usertasks._id":taskId},{$set:{"usertasks.$.taskname":taskname,"usertasks.$.taskdescription":taskdescription,"usertasks.$.taskdate":taskdate}});
        return res.status(200).json({message:"Task updated successfully ...."});
    } catch (error) {
        console.log(error.message);
    }

}