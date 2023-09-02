import {User} from "../models/userModel.js";
import "dotenv/config";
import bcrypt from "bcrypt";

export const getAllUsers = async (req,res)=>{
    let users;
    try {
        users = await User.find();
    } catch (error) {
        console.log(error.message);
    }
    if(!users){
        return res.status(404).json({message:"No users found ...."});
    }
    return res.status(200).json({users});
}

export const getOneUser = async(req,res)=>{
    const {id} = req.params;
    let user;
    try {
        user = await User.findById(id);
    } catch (error) {
        console.log(error.message);
    }
    if(!user){
        return res.status(404).json({message:"User not found ..."});
    }
    return res.status(200).json({user});
}

export const createUser = async (req,res)=>{
    const {username,userpassword} = req.body;
   
    let user;
    let users;
    try {
        let hashedpassword = bcrypt.hashSync(userpassword,Number(process.env.SALTING_ROUNDS));
        
        user = new User({
            username,
            userpassword:hashedpassword
        })
        users = await User.findOne({username});
        if(!users){
            await user.save();
            return res.status(200).json({user});
        }else{
            return res.status(409).json({message:"User already found ..."});
        }
    } catch (error) {
        console.log(error.message);
    }
}

export const compareUser = async(req,res)=>{
    let {username,userpassword} = req.body;
    let user;
    let unhashedpassword;
    try {
        user = await User.findOne({username});
        unhashedpassword = bcrypt.compareSync(userpassword,user.userpassword);
       
        
    } catch (error) {
        console.log(error);
    }
    if(!unhashedpassword || !user){
        return res.status(404).json({message:"User not found..."});
    }
    return res.status(200).json({user});
}

export const deleteOneUser = async(req,res)=>{
    const {id} = req.params;
    let user;
    try {
        user = await User.findByIdAndRemove(id);
        
    } catch (error) {
        console.log(error.message);
    }
    if(!user){
        return res.status(404).json({message:"User not found ..."});
    }
    return res.status(200).json({message:"Deleted Successfully ..."});
}

export const updateUser = async(req,res)=>{
    let user;
    const {id} = req.params;
    const {username,userpassword} = req.body;
    try {
        user = await User.findByIdAndUpdate(id,{username,userpassword});
    } catch (error) {
        console.log(error.message);
    }
    if(!user){
       
        return res.status(404).json({message:"User not found .."});
    }
    await user.save();
    return res.status(200).json({message:"Updated Successfully ..."});
}