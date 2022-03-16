import React from 'react';
import '../CSS/aboutme.css';
// import bgImage from '../images/portfolioBackground.mp4';
import { Route, Routes, Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div id='saltanat'>
      <div className="stars_ab"></div>
      <div className="twinkling_ab"></div>
      <div className="clouds_ab"></div>
        <div className='info'> 
            {/* <img className='self_portrate_img'src="HeadShot_monet.png" alt="self portrait" /> */}
          <div className='about_me_div'>
            <div className='about_me_header'>
              <h1>About Me</h1>
              </div>     
              <div id=''></div>
          <div className='about_me_text'>
            <h3 className='info-sub-title'>Education</h3>
            <p> - EagleHill School - HighSchool - Graduated 2016</p>
            <p> - Pace University - B.S. Biology - Graduated 2021</p>
            <p> - General Assembly - Software Engineering - Graduated 2022</p>
            <h3 className='info-sub-title'>Other Interests</h3>
            <p> - Chess, Skiing, Soccer, Video Games, Cooking, Biology, Art</p>
            
          </div>
        </div>
        </div>
        <div class="bird-container bird-container--one">
            <div class="bird bird--one"></div>
        </div>
        
        <div class="bird-container bird-container--two">
            <div class="bird bird--two"></div>
        </div>
        
        <div class="bird-container bird-container--three">
            <div class="bird bird--three"></div>
        </div>
        
        <div class="bird-container bird-container--four">
            <div class="bird bird--four"></div>
        </div>








        <div className='sun'></div>
        <div id='monet_grass_img_div_ab'>
          <img src="/monet_grass-removebg-preview.png" alt="monet grass"  id='monet_grass_img_ab'/>
        </div>
    </div>
  );
}

export default AboutMe