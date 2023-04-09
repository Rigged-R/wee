import { useState } from 'react'
import './App.css'

function Login(){
  return (
    <>
    <div className="main">
      <h1>Username</h1>
      <input type="text" />
      <h1>Password</h1>
      <input type="text" />
      <button>LOGIN</button>

      <div className="redirect">
        <p>If you don't have an account</p>
        <a >Register</a>
    </div>
    </div>


    </>
  )
}

export default Login
