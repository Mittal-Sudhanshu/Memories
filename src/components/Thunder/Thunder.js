import React from 'react'
import thunder from '../../images/thunder.mp4'
import './Thunder.css'
const Thunder = () => {
  return (
    <div>
        <video className='thunder' autoplay="muted" loop="true">
            <source src={thunder} type="video/mp4"/>
        </video>  
    </div>
  )
}

export default Thunder