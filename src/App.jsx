import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Galeria from './utils/Galeria'
import { HashRouter } from 'react-router-dom'

import { useRef, useEffect } from 'react'



function App() {


  
  return (
    <>
    <HashRouter>
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path='/clientes' element={<Galeria/>}/>
    </Routes>
    </HashRouter>
    </>
  )
}

export default App
