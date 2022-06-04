import {React,useEffect} from 'react'
import Slider from 'react-slick'
import './Video.css'
import { thumbnail } from '../../data'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css'
const Video = ({data}) => {
    const handleClick = (index) =>{
        data(index)
    }

    useEffect(()=>{
      Aos.init({duration: 2000});
    })

    const settings = {
      dots: true,
      arrows:true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='thumb-cont' data-aos='fade-up'>
        <h1>Some Crazy videos</h1>
        {/* <div className="img-cont"> */}
        <Slider {...settings}>
          {thumbnail.map((items,index)=>{
            return(
              // <div>
                <Link to='/video' >
                    <div key={index} className='it' onClick={()=>handleClick(items.video)}>
                        <img src={items.img}/>
                        <i className="fa-solid fa-play play-icon"></i>
                    </div>
                </Link> 
              // </div>

            )
          })}
          </Slider>
        {/* </div> */}
      </div>
    );
  }

                        
export default Video

                