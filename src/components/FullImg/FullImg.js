import React from 'react'
import './FullImg.css'
const FullImg = ({img}) => {
  return (
    <div className='imgs'>
        <img className='full-img' src={img} alt="" />
    </div>
  )
}

export default FullImg