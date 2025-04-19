import React from 'react'
import Navbar from './Navbar'
import Login from './Login'

const LoginLayout = () => {
  return (
    <div className="login-page">
      <Navbar />
      <Login />
    </div>
  )
}

export default LoginLayout