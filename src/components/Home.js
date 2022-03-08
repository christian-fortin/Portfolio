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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus excepturi illo id autem tempore repudiandae
              assumenda magnam non cum eaque laudantium praesentium veritatis
              deserunt minus ipsum, vitae maiores quis esse quaerat unde
              molestias? Accusantium aut quam blanditiis quisquam.
              Necessitatibus, quis labore inventore dolore sed ipsum magni
              quibusdam ducimus tempore dolorum.
            </p>
          </div>
        </div>
      </div>

      <div className="sun_filler"></div>
      <div id="monet_grass_img_div">
        <img
          src="/monet_grass-removebg-preview.png"
          alt="monet grass"
          id="monet_grass_img"
        />
      </div>
    </div>
  </div>
      );
};
export default Home;