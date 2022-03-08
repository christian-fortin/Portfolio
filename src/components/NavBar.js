import React from 'react';
import '../CSS/navBar.css';
import { Route, Routes, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label class="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <Link to='/'><p className="menu__item">Home</p></Link>
          </li>
          <li>
          <Link to='/AboutMe'><p className="menu__item">About Me</p></Link>
            
          </li>
          <li>
            <Link to='/'><p className="menu__item">Education</p></Link>
          </li>
          <li>
          <Link to='/'><p className="menu__item">Projects</p></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
