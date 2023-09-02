import React from "react";
import Header from "./Partials/Header";
import {Box, Grow} from "@mui/material";
import todolistAsset from "../../assets/images/todolist.png";
import "./style.css";
const Home = ()=>{
    return (
        <>
            <Header />
            <Grow in={true}>
                <Box>
                <h1 className="home-title">Catch your tasks before they catch you...</h1>
           
                <ul className="home-content">
                    <li>Todolist is the to-do list app that will change your life .</li>
                    <li>With Todolist, you can finally get organized and stay on top of your tasks .</li>
                    <li>Todolist is easy to use, powerful, and affordable .</li>
                    <li>Try Todolist today and see the difference it can make .</li>
                </ul>
                <img className="home-image" src={todolistAsset} alt="todolist" />
                </Box>
            </Grow>
        </>
    )
}

export default Home;