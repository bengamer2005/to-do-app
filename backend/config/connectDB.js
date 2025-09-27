const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URI, {})
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log("MongoDB conectado"))
        .catch(error => console.error("Error de conexion:", error))

    } catch (error) {
        console.error("Error al conectar con la DB", error.message)
    }
}

module.exports = connectDB