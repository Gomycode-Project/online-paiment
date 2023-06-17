import React from 'react'
import './Register.css'

export const Register = () => {
  return (
    <div>
        <form className='login-form'>
          <img src="../public/img/freemoney-removebg-preview.png" alt="logo" />
            <div>
              <div className='twoinputs'>
              <input placeholder='First Name' type="text"/>
              <input placeholder='Last Name' type="text"/>
              </div>
              <div className='twoinputs'>
              <input placeholder='Mail Address' type="text"/>
              <input placeholder='Home Address' type="text"/>
              </div>
              <div className='twoinputs'>
              <input placeholder='Phone Number' type='text' />
              <input placeholder='Password' type="text" />
              </div>
              <div>
                <button>Register</button>
              </div>
            </div>
        </form>
    </div>
  )
}
