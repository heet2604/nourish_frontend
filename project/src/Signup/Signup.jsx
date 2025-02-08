import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [username,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('http://192.168.129.128:8080/auth/register',{username,email,password})
    .then(result=> console.log(result))
    .catch(err=>console.log(err))
  }

  return (
    <>
      <div
        className="relative flex flex-col justify-center items-center h-screen text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('./apple.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Container for Title, Username, Password, Checkbox, and Button */}
        <div className="relative z-10 bg-black bg-opacity-60 p-12 rounded-lg text-white w-[28rem]">
          <h1 className="text-4xl font-bold mb-8">S I G N U P</h1>
          {/* Form element */}
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
            {/* Name Input */}
            <input  
              type="text"
              placeholder="Username"
              name="username"
              onChange={(e)=>setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-transparent placeholder-white text-white"
            />
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e)=>setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-transparent placeholder-white text-white"
            />
            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e)=>setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-transparent placeholder-white text-white"
            />
            {/* Checkbox and Submit Button */}
            <div className="flex items-center justify-center mt-4">
              <button
                type="submit" // Using type="submit" ensures the form is submitted correctly
                className="w-28 h-12 py-2 bg-red-600 text-white rounded-3xl hover:bg-red-700 transition duration-300 text-sm"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;

