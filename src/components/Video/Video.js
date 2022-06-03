import React from 'react'
import Slider from 'react-slick'
import './Video.css'
import { thumbnail } from '../../data'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Video = ({data}) => {
    const handleClick = (index) =>{
        data(index)
    }
    return (
      <div className='thumb-cont'>
        <div className="img-cont">
          {thumbnail.map((items,index)=>{
            return(
              <div>
                <Link to='/video' >
                    <div key={index} className='it' onClick={()=>handleClick(items.video)}>
                        <img src={items.img}/>
                        <i className="fa-solid fa-play play-icon"></i>
                    </div>
                </Link> 
              </div>

            )
          })}
        </div>
      </div>
    );
  }

                        
export default Video

                