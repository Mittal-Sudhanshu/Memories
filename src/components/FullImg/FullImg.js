import React from 'react'
import './FullImg.css'
const FullImg = ({img}) => {
  return (
    <div className='images'>
        <img className='full-img' src={img} alt="" />
    </div>
  )
}

export default FullImg