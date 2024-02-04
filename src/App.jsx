import { useEffect } from "react"
import "./App.css"
import { useDispatch } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyEmail from "./pages/VerifyEmail"


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  

 

  return (
    <div className="flex min-h-screen w-screen flex-col bg-richblack-900 font-inter">
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login/>} />
        <Route path = "/dashboard" element={<Dashboard />} />
        <Route path = "/verify-email" element={<VerifyEmail />} />
      </Routes>
    </div>
  )
}

export default App
