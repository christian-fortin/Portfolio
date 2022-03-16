import React from 'react'
import '../CSS/projects.css'
import '../CSS/aboutme.css'

const Project_landing_card = () => {
  return (
    <div className="info_project">
          <div className="about_me_div_project">
            <div className="about_me_header_project">
              <h1>Projects</h1>
            </div>
            <div className="about_me_text_project">
             <a className='no_blue_a' href='https://github.com/christian-fortin/SEI9-28_Project_1' target='_blank' rel='noreferrer'><p className='plc_text'> - PressTime - Game</p></a> 
             <a className='no_blue_a' href='###' target='_blank' rel='noreferrer'><p className='plc_text'> - MyFoodBlog - Blog</p></a> 
             <a className='no_blue_a' href='###' target='_blank' rel='noreferrer'><p className='plc_text'> - LoFive - Music Sharing</p></a> 
            </div>
          </div>
        </div>
  )
}

export default Project_landing_card