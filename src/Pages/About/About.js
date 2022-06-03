import React from 'react'
import { team } from '../../data'
import './About.css'
import instagram from '../../images/instagram.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'
const About = () => {
  return (
    <div className='team'>
      {team.map((items,index)=>{
        return(
          <div class="container">
          <div class="cover-photo">
            <img src={items.img} className="profile"/>
          </div>
          <div class="profile-name">{items.name}</div>
          <h3 class="about">{items.profile}</h3>
          {/* <button class="msg-btn">Message</button>
          <button class="follow-btn">Following</button> */}
          <div className='social'>
            {/* <i class="fa-brands fa-instagram"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-linkedin"></i> */}
            <a href={items.instagram} target='_blank'><img src={instagram} alt="" /></a>
            <a href={items.github} target='_blank'><img src={github} alt="" /></a>
            <a href={items.linkedin} target='_blank'><img src={linkedin} alt="" /></a>
    
          </div>
        </div>
        )
      })}


    </div>
  )
}

export default About