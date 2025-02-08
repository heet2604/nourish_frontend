import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing/landing';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from './Home/home';
import Recommendations from './Recommendations/recommendations';
import Vitals from './Vitals/vitals';
import File from './file';

function App() {
  return (
    <div>
      
      <Router>
        <Routes>
          <Route path='/file' element={<File/>}/>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/vitals" element={<Vitals />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
