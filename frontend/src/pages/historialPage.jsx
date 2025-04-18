import React, { useState } from "react"
import Header from "../components/header"
import TaskCard from "../components/taskCard"
import useTasksCompleted from "../hooks/useTasksCompleted"
import "../styles/global.css"

const HistorialPage = () => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    
    const { tasks, fetchTasks } = useTasksCompleted()

    const putValue = (name, value) => {
        if(name === "taskTitle") {
            setTaskTitle(value)
        } else if(name === "taskDescription") {
            setTaskDescription(value)
        }
    }

    return (
        <>
            <Header/>
            <div className="space"></div>
            <div className="cards">
                {tasks.map((newTask, i) => (
                    <TaskCard
                        key={i}
                        title={newTask.taskTitle}
                        status={newTask.status}
                        description={newTask.taskDescription}
                    />
                ))}
            </div>
        </>
    )
}

export default HistorialPage