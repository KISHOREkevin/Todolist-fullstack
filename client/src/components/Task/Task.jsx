import React from "react";

import { Accordion, AccordionDetails, AccordionSummary,Checkbox, Typography } from "@mui/material";
import {ExpandMore} from "@mui/icons-material";

import { Link } from "react-router-dom";
const Task = ({id,taskId,task,taskDescription,checkHandler})=>{

    const cardStyle={
       backgroundColor:"#EA1179",
       color:"#F79BD3",
       margin:"10px 0",
       borderRadius:"5px"
    }
   
    return (
       
        <Accordion sx={cardStyle}>
            <AccordionSummary expandIcon={<ExpandMore />}>
               <Checkbox onChange={()=>{checkHandler(id,taskId)}} />
                <Link to={`/tasks/${id}/${taskId}`} style={{color:"#F79BD3",textDecoration:"none"}} ><Typography fontWeight={"bold"} variant="h5" display={"inline-block"}>{task}</Typography></Link>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{marginLeft:"30px"}}>{taskDescription.substring(0,100)} {taskDescription.length > 100 ? "...": "" }</Typography>
            </AccordionDetails>
        </Accordion>
       
    )
}

export default Task;