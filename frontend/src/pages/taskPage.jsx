import React, { useState } from "react"
import Header from "../components/header"
import TaskCard from "../components/taskCard"
import useTasksGet from "../hooks/useTasksGet"
import PostTask from "../services/postTask"
import TaskComplete from "../services/completeTask"
import TaskEdit from "../services/editTask"
import "../styles/taskInput.css"

const TaskPage = () => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    
    const { tasks, fetchTasks } = useTasksGet()

    const putValue = (name, value) => {
        if(name === "taskTitle") {
            setTaskTitle(value)
        } else if(name === "taskDescription") {
            setTaskDescription(value)
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!taskTitle.trim() || !taskDescription.trim()) {
            return alert("All fields are required")
        }

        const newTask = {
            taskTitle,
            status: "Pending",
            taskDescription
        }

        const result = await PostTask(newTask)

        if(result) {
            fetchTasks()
            setTaskTitle("")
            setTaskDescription("")
        }
    }

    const handleCompleteTask = async (task) => {
        const result = await TaskComplete(task._id)

        if(result) {
            fetchTasks()
        }
    }

    const handleEditTask = async (task) => {
        const result = await TaskEdit(task._id)

        if (result) {
            fetchTasks()
        }
    }

    return (
        <div className="mainPage">
            <Header/>

            <h1>ADD TASKS</h1>
            <form onSubmit={handleSubmit}>
                <div className="addTaskBox">

                    <input type="text" name="taskTitle" id="taskInput" value={taskTitle} onChange={event => putValue(event.target.name, event.target.value)}
                    placeholder="Add new task title ..." />

                    <input type="text" name="taskDescription" id="taskInput" value={taskDescription} onChange={event => putValue(event.target.name, event.target.value)}
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
                {tasks.map((newTask, i) => (
                    <TaskCard
                    key={i}
                    title={newTask.taskTitle}
                    status={newTask.status}
                    description={newTask.taskDescription}
                    task={newTask}
                    onComplete={handleCompleteTask}
                    onEdit={handleEditTask}
                    />
                ))}
            </div>
            
        </div>
    )
}

export default TaskPage