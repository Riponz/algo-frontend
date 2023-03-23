import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="container">
    <div className='signup'>
      <span className='signup-title'>signup</span>
        <form action="post">
            <input className='signup-name' type="text" name="" id="" placeholder='name' />
            <input className='signup-email' type="email" name="" id="" placeholder='email' />
            <input className='signup-phone' type="text" name="" id="" placeholder='phone' />
            <input className='signup-password' type="password" name="" id="" placeholder='password' />
            <input className='signup-confirm-pass' type="password" name="" id="" placeholder='confirm password' />
            <input className='signup-submit' type="submit" value='signup' />
        </form>
    </div>
    </div>
  )
}

export default Signup