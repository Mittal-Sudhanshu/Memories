import React from 'react'
import Video from '../Video/Video'
import './Vids.css'
const Vids = ({video}) => {
  return (
    <div>
        <video className='video-controls' controls autoplay>
            <source src={video} type="video/mp4"/>
        </video>  
    </div>
  )
}

export default Vids