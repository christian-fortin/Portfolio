import React from 'react';
import '../CSS/general.css';
import bgImage from '../images/portfolioBackground.mp4';
import { Route, Routes, Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className="grid-container">
          <div className="video-container">
            <div className="color-overlay"></div>
            <video id='video' autoPlay loop muted width="100%" height="100%">
              <source src={bgImage} type="video/mp4" />
            </video>
          </div>
        <div id='for_media_query'>
          <div className="wrapper">
            <div className="box a">
              <p className="text" id='home_name'>Christian Fortin</p>
            </div>
            <Link to={`/Aboutme`}>
              <div className="box b">
                <p className="text">About Me</p>{' '}
              </div>
            </Link>
            <Link to={`/Projects`}>
              <div className="box c">
                <p className="text">Projects</p>
              </div>
            </Link>
            <a
              href="https://github.com/christian-fortin"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box d">
                <p className="text">LinkedIn</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/christian-fortin/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box e">
                <p className="text">GitHub</p>
              </div>
            </a>
            <a
              href="https://docs.google.com/document/d/1RTuiJZeeaS0zX6b9pzjtCkSRCgmj31PcRB6Sq4Yf0IA/edit"
              target="_blank"
              rel="noreferrer"
            >
              <div className="box f">
                <p className="text">Resume</p>
              </div>
            </a>
          </div>
          </div>
        </div>
    
        //   {/* <div class="section">
        //     <h1>Welcome To Paradise</h1>
        //     <div class="video-container">
        //       <div class="color-overlay"></div>
        //       <video autoPlay loop muted>
        //         <source src={bgImage} type="video/mp4" />
        //       </video>
        //     </div>
        //   </div>
        //   <div style={{height:"400px;width:100%"}}>
        //     <p>
        //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod
        //       soluta natus. Magni tempora animi illo ea accusamus ex deserunt odio
        //       facere deleniti molestiae qui eaque in illum praesentium sunt iste
        //       accusantium nobis repellat aspernatur alias, architecto consectetur
        //       voluptate dolore! Saepe, enim rem nam dolorem tempore blanditiis
        //       perspiciatis repellat architecto.
        //     </p>
        //   </div> */}
        // // </div>
      );
};

export default Home;
