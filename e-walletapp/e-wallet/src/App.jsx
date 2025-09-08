import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
    return (
        <>
        <div>
            <label className="login-title">Email</label>
            <input type="email"
            classname="email"
            placeholder="Enter your email">
            </input>
        </div>

        <div>
            <label className="password=title">Password</label>
            <input type="password"
            className="password"
            placeholder="Enter your password">
            </input>
        </div>

        <button className="button">
            Show
        </button>

        <button className="login-button">
            Login
        </button>

        <button className="google-button">
          Google
        </button>

        <div>
          <a className="forgot-password" href="#">
            Forgot Password
          </a>
        </div>

        <div className="sign-up">
          <p> Don't have an account?</p>
          <button className="sign-up">Sign Up</button>
        </div>
        </>
    )
}

export default App
