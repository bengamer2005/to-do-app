const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/to-do-app", {})
        .then(() => console.log("MongoDB conectado"))
        .catch(error => console.error("Error de conexion:", error))

    } catch (error) {
        console.error("Error al conectar con la DB", error.message)
    }
}

module.exports = connectDB