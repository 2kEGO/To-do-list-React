import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Login from './components/webpages/LogIn/Login'
import Register from './components/webpages/Register/Register'
import Homepage from './components/webpages/Homepage/Homepage'
import ProtectedRoutes from './utils/protectedRoutes'

import AuthContext from './context/authContext'
import { useState } from 'react'


function App() {

  const [profile, setProfile] = useState(false)

  return (
    <>
    <AuthContext.Provider value={{profile, setProfile}}>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login/>}></Route>

          <Route element={<ProtectedRoutes/>}>
            
              <Route path='/homepage' element={<Homepage/>}></Route>
            
          </Route>
          
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
    </>
  )
}

export default App
