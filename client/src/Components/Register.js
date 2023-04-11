import React from 'react'
import { useState } from 'react';
import axios from 'axios';

const Register = () => {


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
     const response= await axios.post("http://localhost:5000/register",
     {
        firstName,
        lastName,
        email,
        password

     });
    
    setFirstName(response.data.msg.firstName);
    setLastName(response.data.msg.lastName);
    setEmail(response.data.msg.email);
    setPassword(response.data.msg.password)

        } catch (error){
   console.log(error)
        }


    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </label>
            <br />
            <label>
                Last Name:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button  type="submit">Register</button>
        </form>
    );
}




export default Register;