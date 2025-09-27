import React from "react"
const APIs = import.meta.env.VITE_BACKEND_URL 

const TaskComplete = async (_id) => {
    try {
        const response = await fetch(`${APIs}/to-do-app/completeTask/${_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if(!response.ok) {
            alert("Failed to change the status of the task")
        } 

        const result = await response.json()

        return result
    } catch (error) {
        console.error("Error de conexión:", error)
    }
}

export default TaskComplete