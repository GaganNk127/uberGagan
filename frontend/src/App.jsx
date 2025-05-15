import { Routes, Route } from 'react-router-dom'
import Start from './pages/Start.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignUp from './pages/UserSignUp.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignUp from './pages/CaptainSignUp.jsx'
import Home from './pages/Home.jsx'
import UserProtectedWrapper from './pages/UserProtectedWrapper.jsx'
import Userlogout from './pages/Userlogout.jsx'
import CaptainHome from './pages/CaptainHome.jsx'
import './App.css'
import CaptainProtectedWrapper from './pages/CaptainProtected.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignUp />} />
        
        {/* Protected Captain Login and SignUp */}
        <Route path='/captain-login' element={
          <CaptainProtectedWrapper>
            <CaptainLogin />
          </CaptainProtectedWrapper>
        } />
        <Route path='/captain-signup' element={
          <CaptainProtectedWrapper>
            <CaptainSignUp />
          </CaptainProtectedWrapper>
        } />

        <Route path='/captain-home' element={<CaptainHome />} />

        {/* Protected Routes for User */}
        <Route 
          path='/home' 
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          } 
        />

        <Route 
          path='/user/logout' 
          element={
            <UserProtectedWrapper>
              <Userlogout />
            </UserProtectedWrapper>
          } 
        />
      </Routes>
    </>
  )
}

export default App
