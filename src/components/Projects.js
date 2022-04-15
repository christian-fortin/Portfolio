import React from 'react';
import '../CSS/projects.css';
import Project_landing_card from './Project_landing_card';
import ProjectCardTP from './ProjectCardTP';

const projects = () => {
  return (
    <div id="saltanat_project">
      <div className="projects_container">
        <h1 className="projects-header">Projects</h1>
        <div className="projectList">
          <div className="project-div">
            <a
              href="  https://christian-fortin.github.io/SEI9-28_Project_1/Game/Start_Page.html"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to website"
            >
              <h4 className="project-title">PressTime</h4>
            </a>
            <p className="project_p">
              <span className="project-title-in-p"> "PressTime" </span> is a fun
              interactive game that tests your skills with your computer's
              mouse. The objective of the game is to press the number's as they
              appear in the same order as displayed at the top of the screen. To
              beat the game, you must make it past all three levels. As the
              developer, I have not passed level 3.
            </p>
            <div className="project-img-container">
              <img
                src="https://user-images.githubusercontent.com/83780176/155367266-b4948399-d7aa-4961-9e3c-2d3082ac7dfb.gif"
                alt="pressTime"
              />
            </div>
          </div>

          <div className="project-div">
            <a href="https://my-food-blog-410.herokuapp.com/sessions/register" target="_blank" rel="noopener noreferrer">
            <h4 className="project-title">MyFoodBlog</h4>
            </a>
            <p className="project_p">
              MyFoodBlog is a personal application for a user to track homemade
              dishes they create. They can keep track of the recepie,
              ingredients, a name, and even have an image for plating ideas.
            </p>
            <div className="project-img-container">
              <img className="project-img" src="/Screen Shot 2022-04-14 at 10.54.50 AM.png" alt="foodblog" />
            </div>
          </div>

          <div className="project-div">
            <a
              href="https://lo-five-frontend.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to website"
            >
              <h4 className="project-title">LoFive</h4>
            </a>
            <p className="project_p">
              <span className="project-title-in-p"> "LoFive" </span> is a social
              media application for users to share and post about music
              interests, songs, albums, artists, and more.
            </p>
            <div className="project-img-container">
              <img className="project-img" src="/LoFive.png" alt="LoFive img" />
            </div>
          </div>

          <div className="project-div">
            <a
              href="https://immense-falls-65855.herokuapp.com/login"
              target="_blank"
              rel="noopener noreferrer"
              alt="link to website"
            >
              <h4 className="project-title">WhatIsThis?</h4>
            </a>
            <p className="project_p">
              {' '}
              <span className="project-title-in-p"> "WhatIsThis?" </span> is
              meant for randomness, entertainment and sharing. It is inspired by
              the website "stumbleUpon" which let you click a button and you
              were taken to a random website. I wanted to recreate that, however
              with a more social media feel and where users can create their
              own.
            </p>
            <div className="project-img-container">
              <img
                className="project-img"
                src="/whatIsThis.png"
                alt="whatIsThis"
              />
            </div>
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
      {/* <div id="monet_grass_img_div_project">
        <img
          src="/monet_grass-removebg-preview.png"
          alt="monet grass"
          id="monet_grass_img_project"
        />
      </div> */}
    </div>
  );
};

export default projects;
