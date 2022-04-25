import React from 'react';
import '../CSS/home.css';
import bgImage from '../images/portfolioBackground.mp4';
import { Route, Routes, Link } from 'react-router-dom';



const Home = () => {
    return (
  <div>
     <div id="background_color">
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="clouds"></div>
      <div className="info">
        {/* <img className='self_portrate_img'src="HeadShot_monet.png" alt="self portrait" /> */}
        <div className="about_me_div">
          <div className="about_me_header">
            <h1>Home</h1>
          </div>
          <div id=""></div>
          <div className="about_me_text">
            <p>
            I have completed a B.S. in Biology,  training my scientific mind while using my work ethic and outside-the-box analytical thinking to solve problems. I have supplemented my Bachelor’s degree with a software engineering training certificate.  My scientific mind injects intellectual curiosity and creativity into software engineering.  I have strong communication, collaboration and multi-tasking skills. I am looking for an entry level job to combine the two skill sets I have built over the years.        
            </p>
          </div>
        </div>
      </div>

      <div className="sun_filler"></div>
      <div id="monet_grass_img_div_home">
        <img
          src="/monet_grass-removebg-preview.png"
          alt="monet grass"
          id="monet_grass_img_home"
        />
      </div>
    </div>
  </div>
      );
};
export default Home;