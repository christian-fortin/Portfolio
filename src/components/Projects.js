import React from 'react';
import '../CSS/projects.css';
import Project_landing_card from './Project_landing_card';
import ProjectCardTP from './ProjectCardTP';

const projects = () => {
  return (
    <div id="saltanat_project">
      <div className="projects_container">
        <h1>Projects</h1>
        <div className='projectList'>
       
          <p className='project_p'>PressTime</p>
          <p className='project_p'>MyFoodBlog</p>
          <p className='project_p'>LoFive</p>
          <p className='project_p'>WhatIsThis?</p>
    
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
      <div id="monet_grass_img_div_project">
        <img
          src="/monet_grass-removebg-preview.png"
          alt="monet grass"
          id="monet_grass_img_project"
        />
      </div>
    </div>
  );
};

export default projects;
