import React, { useState } from "react";
import Header from "./Partials/Header";
import axios from "axios";
import {FormLabel,TextField,Button, Box,Grow} from "@mui/material";
import {useParams , useNavigate} from "react-router-dom"; 

const AddTask = ()=>{
    let [input,setInput] = useState({
        taskname:"",
        taskdescription:""
    })
    let navigate = useNavigate();
    let {id} = useParams();
    const boxStyle = {
        backgroundColor:"#9F0D7F",
        padding:"10px",
        margin:"100px 30px 0 30px",
        borderRadius:'5px'
    }
    let inputHandler = (e)=>{
        let {name,value} = e.target;
        setInput((prevInput)=>{
            return {
                ...prevInput,
                [name]:value
            }
        })
    }
    let submitHandler = async (e)=>{
        e.preventDefault();
        await axios.post(`http://localhost:5000/tasks/${id}`,input).then((response)=>{
           if(response.status === 200){
                navigate(`/tasks/${id}`);
           }
        });
       
    }

    return (
        <>
            <Header />
            <Grow in={true}>
            <Box sx={boxStyle}>
            <form onSubmit={submitHandler}>
                <div className="task-name">
                    <FormLabel sx={{color:"#F79BD3"}} htmlFor="taskname">Enter the task name :</FormLabel><br />
                    <TextField type="text" value={input.taskname} onChange={inputHandler} sx={{width:"100%",input:{color:"#F79BD3",fontSize:"20px"}}} variant="filled" id="taskname" name="taskname" required /><br />
                </div>
                <div className="task-description">
                    <FormLabel sx={{color:"#F79BD3"}} htmlFor="taskdescription">Enter description about task :</FormLabel><br />
                    <TextField type="text" value={input.taskdescription} onChange={inputHandler} sx={{width:"100%",textarea:{color:"#F79BD3"}}}  variant="filled" id="taskdescription" name="taskdescription" multiline required /><br />
                </div>
                <Button type="submit" variant="contained" fullWidth style={{backgroundColor:"#EA1179",color:"#F79BD3"}}>Add Task</Button>
            </form>
            </Box>
            </Grow>
        </>
    )
}

export default AddTask;