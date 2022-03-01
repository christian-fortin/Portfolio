import React from 'react';
import '../CSS/testComponent.css';
// import bgImage from '../images/portfolioBackground.mp4';
import { Route, Routes, Link } from 'react-router-dom';

const TestCompponent = () => {
  return (
    <div>
        <h1>TEST</h1>
        <div className='ground'></div>
        <div className='circle'></div>
    </div>
  );
};

export default TestCompponent;
