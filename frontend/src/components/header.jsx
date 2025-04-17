import React from "react"
import {Link} from "react-router-dom"
import "../styles/header.css"
const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <h1>TO-DO APP</h1>
                </div>
            </header>

            <nav>
                <Link to="/">TASKS</Link>
                <Link to="/historial-tasks">HISTORIAL</Link>
            </nav>
        </>
    )
}

export default Header