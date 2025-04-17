const Task = require("../models/taskModel")

// crear una tarea nueva 
const postTask = async (req, res) => {
    const {taskTitle, taskDescription} = req.body

    if(!taskTitle || !taskDescription) {
        return res.status(400).json({message: "faltan por ingresar datos"})
    }

    try {
        const task = await Task.create({taskTitle, taskDescription})
        res.status(200).json({message: "Tarea creada: ", task})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// llamar a todas las tareas
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json(tasks)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// editar a una tarea
const putTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json({message: "Tarea actualizada: ", task})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

// elimina una tarea
const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json("Tarea eliminada")
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    postTask,
    getTasks,
    putTask,
    deleteTask
}