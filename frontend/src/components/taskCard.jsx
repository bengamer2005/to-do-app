import React from "react"
import "../styles/taskCard.css"

const TaskCard = (task) => {
    return (
        <>
            <div className="card">
                <span className="card-title">{task.title}</span>
                <div></div>
                <span className="card-button">EDIT</span> 
                <span className="card-button">DELETE</span>
                <div className="code-description">{task.description}</div>
            </div>
        </>
    )
}

export default TaskCard