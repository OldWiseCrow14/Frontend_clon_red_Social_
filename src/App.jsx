import {CssBaseline} from "@mui/material"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./views/Login"
import Signup from "./views/Signup"
import Home from "./views/home"

const App = ()=> {

  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
