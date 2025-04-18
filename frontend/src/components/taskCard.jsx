import React from "react"
import "../styles/taskCard.css"

const TaskCard = ({title, description, status}) => {
    return (
        <>
            <div className="card">
                <span className="card-title">{title}</span>
                <div className="space"></div>
                <button id="" type="submit"  className="card-button">EDIT</button> 
                <button id="" type="submit"  className="card-button">COMPLETED</button>
                <div></div>
                <p className="card-status">STATUS: {status}</p>
                <div className="card-description">{description}</div>
            </div>
        </>
    )
}

export default TaskCard