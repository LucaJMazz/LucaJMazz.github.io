import { useEffect, useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import AboutMe from './components/aboutme/AboutMe.jsx'
import './App.css'

function App() {
  return (
  <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<div />} />
      <Route path="/creative-works" element={<div />} />
      <Route path="*" element={<div />} />
    </Routes>
  )
}

export default App
