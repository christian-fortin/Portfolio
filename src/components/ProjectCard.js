import React from 'react'
import '../CSS/projects.css'

const ProjectCard = () => {
  return (
    <div className="info_project_card_1">
          <div className="about_me_div_project">
            <div className="about_me_header_project">
              <h1>THIS IS ONE OF MY PROJECTS</h1>
            </div>
            <div className="about_me_text_project">
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