import React, { useEffect, useState } from "react";
import Header from "./Partials/Header";
import axios from "axios";
import {FormLabel,TextField,Button, Box,Grow} from "@mui/material";
import {useParams,useNavigate} from "react-router-dom";

const UpdateTask = ()=>{
    let {id,taskId} = useParams();
    let [input,setInput] = useState({
        taskname:"",
        taskdescription:""
    })
    let navigate = useNavigate();
    const boxStyle = {
        backgroundColor:"#9F0D7F",
        padding:"10px",
        margin:"100px 30px 0 30px",
        borderRadius:"5px"
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/tasks/${id}/${taskId}`).then((response)=>{
           console.log(response.data);
           response.data.task.map((t)=>{
                return (
                    setInput({
                        taskname:t.taskname,
                        taskdescription:t.taskdescription
                    })
                )
           })
            
        })
    },[id,taskId])

    let inputHandler = (e)=>{
        let {name,value} = e.target;
        setInput((prevInput)=>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }
    let submitHandler= async (e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/tasks/${id}/${taskId}`,input).then((response)=>{
            if(response.status === 200){
                navigate(`/tasks/${id}/${taskId}`);
            }
        })
    }
    return (
        <>
            <Header />
            <Grow in={true}>
            <Box sx={boxStyle}>
            <form onSubmit={submitHandler}>
                <div className="task-name">
                    <FormLabel sx={{color:"#F79BD3"}} htmlFor="taskname">Enter the task name :</FormLabel><br />
                    <TextField onChange={inputHandler} sx={{width:"100%",input:{color:"#F79BD3",fontSize:"20px"}}} value={input.taskname} variant="filled" id="taskname" name="taskname" /><br />
                </div>
                <div className="task-description">
                    <FormLabel sx={{color:"#F79BD3"}} htmlFor="taskdescription">Enter description about task :</FormLabel><br />
                    <TextField onChange={inputHandler} sx={{width:"100%",input:{color:"#F79BD3"}}} value={input.taskdescription}  variant="filled" id="taskdescription" name="taskdescription" /><br />
                </div>
                <Button type="submit" variant="contained" fullWidth style={{backgroundColor:"#EA1179",color:"#F79BD3"}}>Update Task</Button>
               
            </form>
            </Box>
            </Grow>
        </>
    )
}

export default UpdateTask;