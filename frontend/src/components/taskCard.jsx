import React from "react"
import "../styles/taskCard.css"

const TaskCard = ({title, description, status, task, onComplete, onEdit}) => {

    return (
        <>
            <div className="card">
                <span className="card-title">{title}</span>
                <div className="space"></div>
                <button id="editButton" type="button" className="card-button"
                onClick={() => onEdit(task)}>EDIT</button> 

                <button id="statusButton" type="button"  className="card-button"
                onClick={() => onComplete(task)}>COMPLETED</button>

                <div></div>
                <p className="card-status">STATUS: {status}</p>
                <div className="card-description">{description}</div>
            </div>
        </>
    )
}

export default TaskCard