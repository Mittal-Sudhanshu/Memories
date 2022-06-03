import React from 'react'
import { gallery } from '../../data'
import './Gallery.css'
import { Link } from 'react-router-dom'
const Gallery = ({galleryImg}) => {

  const handleClick = (data) =>{
    galleryImg(data)
  }
  return (
    <div className='gallery'>
      {gallery.map((items)=>{
        return(
          <Link to='/fullimg'>
            <div className='gallery-img' onClick={()=>handleClick(items.img)}>
              <img className='img1' src={items.img} alt="" />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Gallery