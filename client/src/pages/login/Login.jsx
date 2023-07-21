import React, {useState} from 'react';
import "./Login.scss";
import { newRequest } from '../../utils/newRequest';
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const [error , setError] = useState(null);

  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();

    try {
      const {data} = await newRequest.post("/auth/login", {email , password})
      localStorage.setItem("currentUser" , JSON.stringify(data.userInfo))
      navigate('/'); // redirect to home page
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