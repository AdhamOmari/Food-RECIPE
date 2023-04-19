import React from 'react'
import './BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <div className='background-video'>
      <video autoPlay loop muted className='video'>
        <source
          src='https://www.shutterstock.com/video/clip-1065498967-stir-fry-noodles-vegetables-flames-super-slow'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default BackgroundVideo
