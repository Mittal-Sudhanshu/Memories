import React from 'react'
import Typewriter from 'typewriter-effect';
import './Typing.css'
const Typing = () => {


  return (
    <div className='typing'>
        <h1 className='effect'>
        <span>
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
            }}
            onInit={(typewriter) => {
                typewriter.typeString('Journeys')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Moments')
                .pauseFor(2500)
                .deleteAll()
                .typeString('Lifestyle')
                .pauseFor(2500)
                .deleteAll()
                .start();
  }}
/>
        </span>
        </h1>
    </div>
  )
}

export default Typing