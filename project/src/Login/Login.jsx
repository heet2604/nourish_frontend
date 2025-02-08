import React from 'react';
import axios from 'axios';

function Login() {
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    const username = document.querySelector('input[placeholder="Username"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;
    axios.post('http://192.168.129.128:8080/auth/login',{username,password})
    .then(result=> console.log(result))
    .catch(err=>console.log(err))
  }
  // const handleSubmit = ()=>{
  //   const username = document.querySelector('input[placeholder="Username"]').value;
  //   const password = document.querySelector('input[placeholder="Password"]').value;


    
  //   axios.post("https://192.168.129.128:8080/auth/login",{username,password})
  //   .then((response)=>{
  //     if(response.data.success){
  //       alert("Login successfull")
  //     }
  //     else{
  //       alert("Something went wrong")
  //     }
  //   })
  //   .catch((err)=>{
  //     alert("Please try again later ")
  //   })
  // }

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
          <h1 className="text-4xl font-bold mb-8">L O G I N</h1>
          <div className="flex flex-col space-y-6">

            {/* Username Input */}
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-transparent placeholder-white text-white"
            />

            {/* Password Input */}
            <input
              type={"password"}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-white bg-transparent placeholder-white text-white"
            />
            
            {/* Checkbox and Submit Button */}
            <div className="flex items-center justify-center mt-4 ">
              <button onClick={handleSubmit} className="w-28 h-12 py-2 bg-red-600 text-white rounded-3xl hover:bg-red-700 transition duration-300 text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
