import React, { useContext } from 'react'
import {UserDataContext} from '../context/UserContext.jsx'
import {UseNavigate} from 'react-router-dom'



function UserProtectedWrapper({children}) {
  // const {user} = useContext(UserDataContext)
  const token = localStorage.getItem('token')
  const navigate = UseNavigate();
  if(!token)
  {
    navigate('./login')
  }
 
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectedWrapper