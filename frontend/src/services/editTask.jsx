import React from "react"

const TaskEdit = async (task) => {
    const { id } = task

    try {
        const response = fetch(``, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })

        if(response.ok) {
            alert("Task edited successfully")
        } else {
            return console.log("Error al editar la task");
        }
        
        const result = await response.json()
    } catch (error) {
        console.error("Error de conexión:", error)
    }
}

export default TaskEdit