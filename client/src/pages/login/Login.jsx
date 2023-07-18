import React from 'react';
import "./Login.scss"

const Login = () => {
  return (
    <div className='login'>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <div className="form-container">
          <label htmlFor="">Email</label>
          <input 
            name = "email"
            type="text" 
            placeholder='Email'
          />
          </div>
          <div className="form-container">
          <label htmlFor="">Password</label>
          <input 
            name = "password"
            type="text" 
            placeholder='Password'
          />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login