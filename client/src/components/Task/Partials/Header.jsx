import React from "react";

import "./style.css";
const Header = ()=>{
    return (
        <>
            <nav className="navbar">
                <a href="/"><h1 className="navbar-title">Todo-list</h1></a>
                <ul className="navbar-tabs">
                    <a href="/"><li>Log out</li></a>
                </ul>
            </nav>
        </>
    )
}

export default Header;