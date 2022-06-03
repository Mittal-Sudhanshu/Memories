import React from 'react'
import Slider from '../../components/Slider/Slider'
import Video from '../../components/Video/Video'
import Gambling from '../../components/Gambling/Gambling'
import Animation from '../../components/Animation/Animation'
import Footer from '../../components/Footer/Footer'
import Sadabahar from '../../components/Sadabahar/Sadabahar'
const Home = ({data}) => {
  return (
    <div>
        <Slider/>
        <Video data={data}/>
        <Gambling data={data}/>
        <Animation/>
        <Sadabahar/>
        <Footer/>
    </div>
  )
}

export default Home