import React, { useEffect, useState } from "react";
import Header from "./Partials/Header";
import axios from "axios";
import { Box,Typography,Button,Grow } from "@mui/material";
import {NavLink,useParams,Link} from "react-router-dom";
import CreateIcon from '@mui/icons-material/Create';

const TaskDetail = ()=>{
    let [task,setTask] = useState([]);
    let {id,taskId} = useParams();
    const boxStyle = {
        backgroundColor:"#9F0D7F",
        color:"#F79BD3",
        margin:"10px",
        padding:"30px",
        borderRadius:"5px",
        marginTop:"30px"
    }
    useEffect(()=>{
        axios.get(`http://localhost:5000/tasks/${id}/${taskId}`).then((response)=>{
            setTask(response.data.task);
            
        })
    },[id,taskId,task])
    return (
        <>
            <Header />
           {task.map((t)=>{
                return (
                    <Grow key={t._id} in={true}>
                        <Box sx={boxStyle}>
                        <Typography variant="h3" sx={{display:"inline-block"}}>{t.taskname}</Typography>
                        <Button LinkComponent={NavLink} to={`/tasks/${id}/${t._id}/update-task`} variant="contained"   style={{backgroundColor:"#EA1179",color:"#F79BD3",float:"right"}}><CreateIcon /></Button>
                        
                        <Typography variant="button" sx={{float:"right",margin:"3px 15px"}}>{t.taskdate}</Typography>
                        <Typography variant="h5" sx={{mt:"30px"}}>{t.taskdescription}</Typography>
                        <Link to={`/tasks/${id}`} style={{color:"yellow",marginTop:"10px",textAlign:"center",display:"block"}}>Go back</Link>
                        </Box>
                    </Grow>
                )
           })}
            
        </>
        
    )
}

export default TaskDetail;