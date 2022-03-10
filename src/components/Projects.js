import React from 'react';
import '../CSS/projects.css';
import Project_landing_card from './Project_landing_card';
import ProjectCard from './ProjectCard';

const projects = () => {
  return (
    <div id="saltanat_project">
      <div className="projects_container">
        <Project_landing_card/>
        <ProjectCard/>
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
          id="monet_grass_img"
        />
      </div>
    </div>
  );
};

export default projects;
