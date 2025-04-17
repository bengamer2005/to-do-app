import React, { useState } from "react"
import Header from "../components/header"
import TaskCard from "../components/taskCard"
import "../styles/taskBox.css"

const taskData = {
    title: "",
    description: ""
}


const TaskPage = () => {
    
    const [task, setTask] = useState(taskData)
    const [tasks, setTasks] = useState([])
    
    const { title, description } = task
    
    const putValue = (name, value) => {
        setTask((prevState) => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!title.trim() || !description.trim()) {
            return alert("All fields are required")
        }
    
        setTasks((prevTasks) => [
            ...prevTasks, 
            task
        ])
        
        setTask(taskData)
    }
    

    return (
        <div className="mainPage">
            <Header/>

            <div className="space"></div>
            <form onSubmit={handleSubmit}>
                <div className="addTaskBox">

                    <input type="text" name="title" id="taskInput" value={title} onChange={event => putValue(event.target.name, event.target.value)}
                    placeholder="Add new task title ..." />

                    <input type="text" name="description" id="taskInput" value={description} onChange={event => putValue(event.target.name, event.target.value)}
                    placeholder="Add new task description ..." />

                    <button id="sendButton" type="submit">
                        <svg fill="none" viewBox="0 0 664 663">
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="33.67"
                                stroke="#6c6c6c"
                                d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                            ></path>
                        </svg>
                    </button>

                </div>
            </form>
            <div className="space"></div>

            <div className="cards">
                {tasks.map((newTask, i) => {
                    return (
                        <TaskCard key={i} title={newTask.title} description={newTask.description}/>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskPage