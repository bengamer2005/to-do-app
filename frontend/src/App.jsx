import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskPage from "./pages/taskPage"
import HistorialPage from "./pages/historialPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage/>} />
        <Route path="/historial-tasks" element={<HistorialPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App