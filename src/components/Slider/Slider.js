import React from 'react'
import images from '../../data'
import './Slider.css'
import Typing from '../Typing/Typing'
const Slider = () => {
  return (
    <div className='slider'>
        <Typing/>
        <div className='slider-track'>
                {images.map((items)=>{
                    return(
                        <div className='figure'>
                            <img src={items.img}></img>
                        </div>
                    )
                })}
        </div>
    </div>
  )
}

export default Slider