import React, { useContext,useEffect } from 'react'
import {UserDataContext} from '../context/UserContext.jsx'
import {useNavigate} from 'react-router-dom'



function UserProtectedWrapper({children}) {
  // const {user} = useContext(UserDataContext)
  const token = localStorage.getItem('token')
  const navigate = useNavigate();
  
   useEffect(()=>{
    if(!token)
    {
      navigate('/login')
    }
   })
 
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper