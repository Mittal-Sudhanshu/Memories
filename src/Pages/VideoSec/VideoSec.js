import React from 'react'
import { videos } from '../../data'
import'./VideoSec.css'
const VideoSec = () => {
  return (
    <div className='vidsec-cont'>
        <div className='vid-sec'>
            {videos.map((items)=>{
                return(
                    <video className='video-sec' controls autoplay>
                        <source src={items.vid} type="video/mp4"/>
                    </video>  
                )
            })}
        </div>
    </div>
  )
}

export default VideoSec