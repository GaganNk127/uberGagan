import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function CaptainProtectedWrapper({ children }) {
  const captainToken = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (!captainToken) {
      navigate('/captain-login')
    }
  }, [captainToken, navigate])

  return <>{children}</>
}

export default CaptainProtectedWrapper
