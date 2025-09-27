import { useEffect, useState } from "react"
const APIs = import.meta.env.VITE_BACKEND_URL

const useTasksCompleted = () => {
    const [tasks, setTasks] = useState([])

    const fetchTasks = async () => {
        try {
            const res = await fetch(`${APIs}/to-do-app/getCompletedTasks`)
            if(!res.ok) throw new Error("Error al obtener tareas")
            const data = await res.json()
            setTasks(data)

        } catch (error) {
            console.error("error con el fetch: ", error);
        }
    }
    useEffect(() => {
        fetchTasks()
    }, [])

    return {
        tasks,
        fetchTasks,
        setTasks
    }
}

export default useTasksCompleted
