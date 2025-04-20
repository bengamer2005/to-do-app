import React from "react"

const TaskComplete = async (task) => {
    const { _id } = task

    try {
        const response = await fetch(`http://localhost:3000/to-do-app/completeTask/${_id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task)
        })

        if(!response.ok) {
            return alert("Failed to change the status of the task")
        } 

        const result = await response.json()

        return result
    } catch (error) {
        console.error("Error de conexión:", error)
    }
}

export default TaskComplete