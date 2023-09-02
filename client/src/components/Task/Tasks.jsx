import React, { useEffect, useState } from "react";
import Header from "./Partials/Header";
import axios from "axios";
import Task from "./Task";
import {Box, Button,Grow,Typography} from "@mui/material";
import "./style.css";
import {NavLink, useParams,useNavigate} from "react-router-dom";

const Tasks = ()=>{
   let {id} = useParams();
   let [tasks,setTasks] = useState([]);
   let navigate = useNavigate();
    const boxStyle = {
        backgroundColor:"#9F0D7F",
        margin:"0 3%",
        height:"450px",
        marginTop:"20px",
        borderRadius:"5px",
        boxShadow:"0px 0px 10px black",
        padding:"10px",
        overflowY:"scroll",
        '@media (width < 800px)':{
            height:"500px"
        }
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/tasks/${id}/`).then((response) =>{
            setTasks(response.data.tasks);
        })
    },[id,tasks]);
    let isChecked= async(id,taskId)=>{
        await axios.delete(`http://localhost:5000/tasks/${id}/${taskId}`).then((response)=>{
            if(response.status === 200){
                navigate(`/tasks/${id}`);
            }
        })
    }
    return (
        <>
            <Header />
            <Grow in={true}>
            <div className="task-container">
            <Button LinkComponent={NavLink} to={`/tasks/${id}/add-task`} fullWidth variant="contained" sx={{mt:"10px",padding:"8px 0"}}>Add Task</Button>
                <Box sx={boxStyle}  >
                    {tasks.length === 0 ? <Typography style={{color:"yellow",textAlign:"center",fontSize:"24px"}}>Add Tasks</Typography> : tasks.map((task)=>{
                        return <Task key={task._id} id={id} taskId={task._id} task={task.taskname} checkHandler={isChecked} taskDescription={task.taskdescription} />
                    })}
                </Box>
                
            </div>
            </Grow>
        </>
    )
}

export default Tasks;