import { useState } from 'react'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Login from './components/webpages/LogIn/Login'
import Register from './components/webpages/Register/Register'
import Homepage from './components/webpages/Homepage/Homepage'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
