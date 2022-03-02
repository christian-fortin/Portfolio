import React from 'react';
import '../CSS/testComponent.css';
// import bgImage from '../images/portfolioBackground.mp4';
import { Route, Routes, Link } from 'react-router-dom';

const TestCompponent = () => {
  return (
    <div>
        <div className='self_portrate'>
          <img className='self_portrate_img'src="HeadShot_monet.png" alt="self portrait" />
        </div>
        <div className='sun'></div>
        <div id='monet_grass_img_div'>
          <img src="/monet_grass-removebg-preview.png" alt="monet grass"  id='monet_grass_img'/>
        </div>
    </div>
  );
};

export default TestCompponent;
