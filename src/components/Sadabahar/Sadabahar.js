import React from 'react'
import img from '../../images/54.jpg'
import img2 from '../../images/53.jpg'
import './Sadabahar.css'
const Sadabahar = () => {
  return (
    <div className='sadabahar'>
        <h1>Our Evening Hub</h1>
        <div className='chowk chowk1'>
            <img src={img} alt="" />
        </div>
        <div className='sada-text'>
            The place where half college can be found in the evening where you find grills and IIT-BHU CSE hacker and Ice Cream wale bhaiya, Shivani ki Chat, Punjabi Restaurant, Men's Saloon where bridal makeover is done and many more stuff.
        </div>
        <div className='chowk heaven'>
            <img src={img2} alt="" />
        </div>
    </div>
  )
}

export default Sadabahar