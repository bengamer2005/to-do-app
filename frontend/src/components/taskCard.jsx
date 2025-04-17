import React from "react"
import "../styles/taskCard.css"

const TaskCard = ({title, description, status}) => {
    return (
        <>
            <div className="card">
                <span className="card-title">{title}</span>
                <div></div>
                <span className="card-button">EDIT</span> 
                <span className="card-button">DELETE</span>
                <div></div>
                <p className="card-status">STATUS: {status}</p>
                <div className="card-description">{description}</div>
            </div>
        </>
    )
}

export default TaskCard