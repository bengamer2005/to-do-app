import React from "react"
const APIs = import.meta.env.VITE_BACKEND_URL 

const PostTask = async (task) => {
    try {
        const response = await fetch(`${APIs}/to-do-app/postTask`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task)
        })

        if(!response.ok) {
            return alert("Failed to create task")
        } 

        const result = await response.json()

        return result
    } catch (error) {
        console.error("Error de conexión:", error)
    }
}

export default PostTask