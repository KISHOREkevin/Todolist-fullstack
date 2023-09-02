import React, { useState } from "react";
import Header from "../Home/Partials/Header";
import {FormLabel,TextField,Grow,Button,Box,Typography} from "@mui/material";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import "./style.css";
const Signup = ()=>{
    let navigate = useNavigate();
    let [error,setError] = useState({
        indicater:false,
        message:""
    });
    let [input,setInput] = useState({
        username:"",
        userpassword:""
    });

    const boxStyle={
        padding:"10px 20px",
        backgroundColor:"#9F0D7F",
        boxShadow:"2px 2px 3px black",
        borderRadius:"5px",
        margin:"100px 20px 0 40px"
    
    };
    let inputHandler = (e)=>{
        const {name,value} = e.target;
        setInput((prevInput)=>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }
    let submitHandler = async (e)=>{
        try {
            e.preventDefault();
            await axios.post("http://localhost:5000/",input).then((response)=>{
                if(response.status === 200){
                    setError({indicater:false,message:""});
                    navigate("/log-in");
                }else{
                    
                    navigate("/sign-up");
                }
            });
            
            
        } catch (error) {
           setError({indicater:true,message:error.response.data.message});
           
        }
       
    }
    return (
        <>
           
            <Header />
            <Grow in={true}>
            <Box sx={boxStyle} >
            <form onSubmit={submitHandler}>
                <div className="form-username">
                    <FormLabel sx={{color:"#F79BD3"}} htmlFor="username">Enter your name :</FormLabel><br /><br />
                    <TextField onChange={inputHandler} value={input.username} sx={{width:"100%",input:{color:"#F79BD3",outlineColor:"green"}}} label="Enter name" variant="outlined" type="text" name="username" id="username" required /> <br /><br />
                </div>
                <div className="form-userpassword">
                    <FormLabel sx={{color:"#F79BD3"}} htmlFor="userpassword">Enter your password :</FormLabel> <br /><br />
                    <TextField onChange={inputHandler} value={input.userpassword} sx={{width:"100%",input:{color:"#F79BD3"}}} label="Enter password" variant="outlined" type="password" name="userpassword" id="userpassword" required/> <br /><br />
                </div>
                <Typography sx={{textAlign:"center",color:"yellow"}} variant="body2">{  error.indicater ? error.message  : null}</Typography>
                <Button type="submit" variant="contained" fullWidth style={{background:"#EA1179",color:"#F79BD3"}} >Sign up</Button>
                <Link to={"/log-in"} style={{color:"yellow",textAlign:"center",display:"block",marginTop:"10px"}}>Already have an account ? log-in</Link>
            </form>
            </Box>
            </Grow>
        </>

    )
}

export default Signup;