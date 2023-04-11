import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {
  const [logindata,setLoginData]=useState({})
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    try{
      const response= axios.get('http://localhost:5000/login',{
        email,
        password
      })
      setLoginData(response)

    
    }catch(error){
      console.log(error)
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;