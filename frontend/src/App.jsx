import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Signup from './pages/signup.jsx'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import home from './pages/home.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<home />} />
      </Routes>
    </>
  )
}

export default App
