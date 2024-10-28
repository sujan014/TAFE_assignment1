import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './pages/Layout'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import About from './pages/About'
import Course from './pages/Course'

function App() {  

  return (
    <>      
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/course/:id' element={<Course />}/>
        </Route>
      </Routes>      
    </>
  )
}

export default App
