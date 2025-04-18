import { useEffect, useState } from "react"
 
 const useTasksCompleted = () => {
     const [tasks, setTasks] = useState([])
 
     const fetchTasks = async () => {
         try {
             const res = await fetch("http://localhost:3000/to-do-app/getCompletedTasks")
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