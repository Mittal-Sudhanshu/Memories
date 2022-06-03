import React from 'react'
import academic from '../../images/academic.jpeg'
import hostel from '../../images/hostel.jpeg'
import library from '../../images/lib.jpg'
import classroom from '../../images/classroom.jpg'
import './Animation.css'
const Animation = () => {
  return (
    <div className='animation'>
        <div className="routine">
            <div className="animate-img">
                <div className='hostel'>
                    <div className='info'>
                        <div className="main">
                            <img  src={hostel} alt="" />
                            <h2>Hostel</h2>
                        </div>
                        <p>The Place for all the fun and "Gambiling"</p>
                    </div>
                </div>
                <div className='academic'>
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
                <div className='library'>
                    <div className="info">
                        <p>The place where we go to use free "Wi-Fi"  (Hostel Cries)</p>
                        <div className="main">
                            <img  src={library} alt="" />
                            <h2>Library</h2>
                        </div>
                    </div>
                </div>
                <div className='classroom'>
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