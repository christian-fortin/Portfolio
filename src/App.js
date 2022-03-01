import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Home from './components/Home';
import TestCompponent from './components/TestCompponent';


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/AboutMe" element={<AboutMe/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/TestCompponent" element={<TestCompponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
