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
            Since I was little I have realized that I think differently from other people, and I bring that into software engineering with a passion. I went through school as a biology student training my scientific mind while using my work ethic, and outside the box analytical thinking  to solve problems. My scientific mind injects curiosity and adventure into the workplace. I am flexible, communicative, and sensible when working with others. 
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