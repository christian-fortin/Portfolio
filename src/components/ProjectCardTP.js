import React from 'react'
import '../CSS/projects.css'

const ProjectCard = () => {
  return (
    <div className="info_project_card_1">
          <div className="about_me_div_project">
            <div className="about_me_header_project">
            <a className='no_blue_a' href='https://github.com/christian-fortin/SEI9-28_Project_1' target='_blank' rel='noreferrer'><h1>PressTime</h1></a>
            </div>
            <div className="about_me_text_project">
              <p>
              PressTime is a fun interactive game that tests your skills with your computer's mouse. The objective of the game is to press the number's as they appear in the same order as displayed at the top of the screen. To beat the game, you must make it past all three levels. As the developer, I have not passed level 3.
              </p>
              <p>
              PressTime is a fun interactive game that tests your skills with your computer's mouse. The objective of the game is to press the number's as they appear in the same order as displayed at the top of the screen. To beat the game, you must make it past all three levels. As the developer, I have not passed level 3.
              </p>

              
            </div>
          </div>
        </div>
  )
}

export default ProjectCard


// .info_project{
//     height: 375px;
//     width: 800px;
//     border-radius: 1em;
//     border: 1px solid rgba(255, 255, 255, 0.5);
//     background: rgba(255, 255, 255, 0.2);

//     backdrop-filter: blur(6px);
//     position: absolute;
//     top: 50px;
//     right: 100px;
//     box-shadow: 4px 4px 4px 1px black;
//     z-index: 7;
//     animation: toCenter .9s linear forwards;
// }