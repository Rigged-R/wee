import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="main">
      <h1>Username</h1>
      <input type="text" />
      <h1>E-mail</h1>
      <input type="text" />
      <h1>Password</h1>
      <input type="text" />
      <button>REGISTER</button>

      <div className="redirect">
        <p>If you have an account</p>
        <a>Login</a>
    </div>
    </div>


    </>
  )
}

export default App
