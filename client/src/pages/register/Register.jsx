import React, {useState} from 'react';
import "./Register.scss";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
  const [file , setFile] = useState(null);
  const [user , setUser] = useState({
    username : "",
    email : "",
    password : "",
    img : "",
    country : "",
    isSeller : false,
    desc : ""
  })
  console.log(user)
  async function handleSubmit (e) {
    e.preventDefault();
  }

  function handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevState) => {
      return {...prevState , [name] : value}
    })
  }

  function handleSeller (e) {
    setUser(prevState => ({...prevState, isSeller : e.target.checked}));
  }

  function handleImg (e){
    setFile(e.target.files[0])
  }
  return (
    <div className='register'>
      <form className="container" onSubmit={handleSubmit}>
          <div className="left">
            <h1 className="left-title">
              Create New Account
            </h1>

            <div className="left-username">
              <label htmlFor="">Username</label>
              <input 
                name="username" 
                type="text" 
                placeholder='Your name' 
                onChange={handleChange}
                />
            </div>
            <div className="left-email">
              <label htmlFor="">Email</label>
              <input 
                type="email" 
                name="email" 
                placeholder='Email' 
                onChange={handleChange}
              />
            </div>
            <div className="left-password">
              <label htmlFor="">Password</label>
              <input 
                type="password" 
                name="password" 
                placeholder='Password' 
                onChange={handleChange}
                />
            </div>
            <div className="left-profile-picture">
              <label htmlFor="">Profile Picture</label>
              <input type="file" onChange={handleImg}/>
            </div>
            <div className="left-country">
              <label htmlFor="">Country</label>
              <input type="text" name='country' placeholder='USA' onChange={handleChange}/>
            </div>
          </div>
          <div className="right">
            <h1 className='right-title'>I want to become a seller</h1>
            <div className="toggle">
              <label htmlFor="">Activate the seller account</label>
              <label className='switch'>
              <input type="checkbox" onChange={handleSeller}/>
              <span className="slider round"></span>
              </label>
            </div>
            <div className="right-ph-number">
              <label htmlFor="">Phone Number</label>
              <input
                name="phone"
                type="text"
                placeholder="+1 234 567 89"
                onChange={handleChange}
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
              onChange={handleChange}
              ></textarea>
            </div>
            <button type='submit'>Submit</button>
          </div>
      </form>
    </div>
  )
}

export default Register