import React from "react";

import "./style.css";
const Header = ()=>{
    return (
        <>
            <nav className="navbar">
                <a href="/"><h1 className="navbar-title">Todo-list</h1></a>
                <ul className="navbar-tabs">
                    <a href="/sign-up"><li>Sign up</li></a>
                    <a href="/log-in"><li>Log in</li></a>
                </ul>
            </nav>
        </>
    )
}

export default Header;