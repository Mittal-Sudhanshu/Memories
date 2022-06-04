import {React,useEffect} from 'react'
import academic from '../../images/academic.jpeg'
import hostel from '../../images/hostel.jpeg'
import library from '../../images/lib.jpg'
import classroom from '../../images/classroom.jpg'
import './Animation.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
const Animation = () => {

    useEffect(()=>{
        Aos.init({duration: 1000
        ,easing: 'ease-in-out-quart'});
      })
  return (
    <div className='animation'>
        <div className="routine">
            <div className="animate-img">
                <div className='hostel' data-aos='slide-right'>
                    <div className='info'>
                        <div className="main">
                            <img  src={hostel} alt="" />
                            <h2>Hostel</h2>
                        </div>
                        <p>The Place for all the fun and "Gambiling"</p>
                    </div>
                </div>
                <div className='academic' data-aos='slide-left' data-aos-delay='700'>
                    <div className="info">
                        <p>When Mid-Sem is approaching only in Week Days from 9AM to 6PM</p>
                        <div className="main">
                            <img  src={academic} alt="" />
                            <h2>Academic</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="animate-img">
                <div className='library' data-aos='slide-right' data-aos-delay='1400'>
                    <div className="info">
                        <p>The place where we go to use free "Wi-Fi"  (Hostel Cries)</p>
                        <div className="main">
                            <img  src={library} alt="" />
                            <h2>Library</h2>
                        </div>
                    </div>
                </div>
                <div className='classroom' data-aos='slide-left' data-aos-delay='2000'>
                    <div className="info">
                        <div className="main">
                            <img  src={classroom} alt="" />
                            <h2>Classroom</h2>
                        </div>
                        <p>The Best Place to Sleep</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Animation