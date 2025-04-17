const express = require("express")
const app = express()
app.use(express.json())

// se usa cors para poder hacer las solicitudes desde mi frontend
const cors = require("cors")
app.use(cors({
    origin: "http://localhost:5173"
}))

// creamos los endpoints
const taskRoutes = require("./routes/taskRoute")
app.use("/to-do-app", taskRoutes)

// conectamos la base de datos
const connectDB = require("./config/connectDB")
connectDB()

// le asignamos un puerto a nuestro servidor
const port = 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`)
})