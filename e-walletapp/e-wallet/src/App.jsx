import { useState } from 'react'
import {Eye, EyeOff} from 'lucide-react'
import './App.css'

function App() {
  return (
    <div className="login-container">
      <div>
        <label className="login-title">Email</label>
        <input
          type="email"
          className="email"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="password-title">Password</label>
        <input
          type="password"
          className="password"
          placeholder="Enter your password"
        />
      </div>

      <button className="button">Show</button>
      <button className="login-button">Login</button>
      <button className="google-button">Google</button>

      <div>
        <a className="forgot-password" href="#">
          Forgot Password
        </a>
      </div>

      <div className="sign-up">
        <p>Don't have an account?</p>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default App;
