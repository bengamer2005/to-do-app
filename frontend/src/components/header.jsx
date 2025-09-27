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
                <Link style={{ textDecoration: "none", width: "50%" }} to="/">PENDIENTES</Link>
                <Link style={{ textDecoration: "none", width: "50%" }} to="/historial-tasks">HISTORIAL</Link>
            </nav>
        </>
    )
}

export default Header