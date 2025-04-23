import React from "react"

const TaskEdit = async (_id) => {
    const newTaskTitle = prompt("New task title: ")
    const newTaskDescription = prompt("New task description: ")

    if (newTaskTitle || newTaskTitle) {
        try {
            const response = fetch(`http://localhost:3000/to-do-app/putTask/${_id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    taskTitle: newTaskTitle,
                    taskDescription: newTaskDescription
                })
            })
    
            if(response.ok) {
                return alert("se edito la task con exito");
            }

            const result = await response

            return result

        } catch (error) {
            console.error("Error de conexión:", error)
        }
    }
}

export default TaskEdit