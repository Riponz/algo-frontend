import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className="container">
    <div className='login'>
      <span className='login-title'>login</span>
        <form action="post">
            <input className='login-username' type="email" name="" id="" placeholder='email' />
            <input className='login-password' type="password" name="" id="" placeholder='password' />
            <input className='login-submit' type="submit" value='login' />
        </form>
    </div>
    </div>
  )
}

export default Login