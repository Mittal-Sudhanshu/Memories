import {React,useEffect} from 'react'
import Gambling_thumbnail from '../../images/gambling_thumbnail.jpg'
import './Gambling.css'
import gambling_vid from '../../images/gambling.mp4'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'
const Gambling = ({data}) => {

    const handleClick = (video)=>{
        data(video)
    }

    useEffect(()=>{
        Aos.init({duration: 2000});
      })
  return (
    <div data-aos='fade-up'>
        <h1 className='head-gamb'>Gambiling</h1>
        <div className='gambling'>
            <div className='uno'>
                <img src={Gambling_thumbnail} />
                <div className='jurm'>
                    <p>
                    Tonight, Room No 203 (type-4) was busy with gambiling with all 8 students. I need the complete roport by 10AM. Ur parents will also be informed shortly for the same..
                    </p>

                    <Link to='/video'><button className='btn' onClick={()=>handleClick(gambling_vid)}>
                        <i className="fa-solid fa-play gamb-icon"></i>Play Video</button></Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Gambling