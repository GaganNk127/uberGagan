import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/home.jsx'
import UserLogin from './pages/UserLogin.jsx'
import UserSignUp from './pages/UserSignUp.jsx'
import CaptainLogin from './pages/CaptainLogin.jsx'
import CaptainSignUp from './pages/CaptainSignUp.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/login' element = {<UserLogin/>}/>
        <Route path = '/signup' element = {<UserSignUp/>}/>
        <Route path = '/captain-login' element = {<CaptainLogin/>}/>
        <Route path = '/captain-signup' element = {<CaptainSignUp/>}/>
      </Routes>
    </>
  )
}

export default App
