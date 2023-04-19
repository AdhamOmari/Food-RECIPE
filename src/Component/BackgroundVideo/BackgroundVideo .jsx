import React from 'react'
import './BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <div className='background-video'>
      <video autoPlay loop muted className='video'>
        <source
          src='https://www.shutterstock.com/shutterstock/videos/1086192224/preview/stock-footage-super-slow-motion-shot-of-wok-pan-with-flying-ingredients-in-the-air-and-fire-flames-filmed-on.webm'
          type='video/mp4'
        />
      </video>
    </div>
  )
}

export default BackgroundVideo
