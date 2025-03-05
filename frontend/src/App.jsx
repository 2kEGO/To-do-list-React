import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Login from './components/webpages/LogIn/Login'
import Register from './components/webpages/Register/Register'
import Homepage from './components/webpages/Homepage/Homepage'
import ProtectedRoutes from './utils/protectedRoutes'
import Profile from './components/webpages/Profile/Profile'

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

        <Route element={<ProtectedRoutes/>}>
          <Route path='/homepage' element={<Homepage/>}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
