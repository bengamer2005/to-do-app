import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TaskPage from "./pages/taskPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App