import React from 'react'
import './login.css'

export default function Login() {
  return (
    <div className='login'>
      <div className='left-col'>
        <div className='content intro'>
          <h1>SBMathson</h1>
          <p>Blogpost about traveling journey</p>
        </div>
      </div>
      <div className='right-col'>
        <div className=' content'>
          <div className='greetings'>
            <h2>Welcome Back!</h2>
            <p>Log in to your account</p>
          </div>
          <div className='form-login'>
            <div className='input-wrapper'>
              <label>Email</label>
              <input type='text' placeholder='enter email' />
            </div>
            <div className='input-wrapper'>
              <label>Password</label>
              <input type='password' placeholder='******' />
            </div>
            <div className='input-wrapper'>
              <button className='btn'>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
