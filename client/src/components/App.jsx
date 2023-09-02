import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home/Home";
import Login from "./User/Login";
import Signup from "./User/Signup";
import Tasks from "./Task/Tasks";
import TaskDetail from "./Task/TaskDetail";
import AddTask from "./Task/AddTask";
import UpdateTask from "./Task/UpdateTask";

const App = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/Log-in" element={<Login />} />
                <Route path="/sign-up" element={<Signup/>} />
                <Route path="/tasks/:id" element={<Tasks />} />
                <Route path="/tasks/:id/:taskId" element={<TaskDetail />} />
                <Route path="/tasks/:id/add-task" element={<AddTask />} />
                <Route path="/tasks/:id/:taskId/update-task" element={<UpdateTask />} />
                <Route path="*" element={<h1>Not found</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;