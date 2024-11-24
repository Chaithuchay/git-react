import React from 'react'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Help from '../components/Help/Help'
import '../styles/global.scss'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>
            <Route path="/Help" element={<Help/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
