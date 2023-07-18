import React, {useState} from 'react';
import "./Login.scss";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [getEmail , setEmail] = useState('');
  const [getPassword , setPassword] = useState('');
  const [error , setError] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:8000/api/v1/auth/login`, {getEmail , getPassword})
      console.log(res)
      navigate('/'); // move to home page
    } catch (err) {
      setError(err.response.data)
    }

  }
  return (
    <div className='login'>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <div className="form-container">
          <label htmlFor="">Email</label>
          <input 
            name = "email"
            type="text" 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <span className='err-mail'>{error.errors.email}</span>}
          </div>
          <div className="form-container">
          <label htmlFor="">Password</label>
          <input 
            name = "password"
            type="password" 
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span className='err-password'>{error.errors.password}</span>}
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Login