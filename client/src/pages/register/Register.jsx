import React from 'react';
import "./Register.scss";

const Register = () => {
  return (
    <div className='register'>
      <form className="container">
          <div className="left">
            <h1 className="left-title">
              Create New Account
            </h1>

            <div className="left-username">
              <label htmlFor="">Username</label>
              <input name="username" type="text" placeholder='Your name' />
            </div>
            <div className="left-email">
              <label htmlFor="">Email</label>
              <input type="email" name="email" placeholder='Email' />
            </div>
            <div className="left-password">
              <label htmlFor="">Password</label>
              <input type="password" name="password" placeholder='Password' />
            </div>
            <div className="left-profile-picture">
              <label htmlFor="">Profile Picture</label>
              <input type="file" />
            </div>
            <div className="left-country">
              <label htmlFor="">Country</label>
              <input type="text" name='country' placeholder='USA'/>
            </div>
          </div>
          <div className="right">
            <h1 className='right-title'>I want to become a seller</h1>
            <div className="toggle">
              <label htmlFor="">Activate the seller account</label>
              <label className='switch'>
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <div className="right-ph-number">
              <label htmlFor="">Phone Number</label>
              <input
                name="phone"
                type="text"
                placeholder="+1 234 567 89"
              />
            </div>
            <div className="right-desc">
              <label htmlFor="">Description</label>
              <textarea
              placeholder="A short description of yourself"
              name="desc"
              id=""
              cols="30"
              rows="10"
              ></textarea>
            </div>
            <button type='submit'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default Register