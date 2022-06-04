import {React,useEffect} from 'react'
import img from '../../images/54.jpg'
import img2 from '../../images/53.jpg'
import './Sadabahar.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Sadabahar = () => {

  
  useEffect(()=>{
    Aos.init({duration: 2000});
  })
  return (
    <div className='sadabahar' data-aos='fade-up'>
        <h1>Our Evening Hub</h1>
        <div className='sada-chowk'>
          <div className='chowk chowk1' data-aos='slide-right'>
              <img src={img} alt="" />
          </div>
          <div className='sada-text' data-aos='slide-up'>
              The place where half college can be found in the evening where you find grills and IIT-BHU CSE hacker and Ice Cream wale bhaiya, Shivani ki Chat, Punjabi Restaurant, Men's Saloon where bridal makeover is done and many more stuff.
          </div>
          <div className='chowk heaven' data-aos='slide-left'>
              <img src={img2} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Sadabahar