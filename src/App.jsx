import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
    </Routes>
    </>
  )
}

export default App
