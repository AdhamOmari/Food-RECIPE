import React from 'react'
import './BackgroundVideo.css'

const BackgroundVideo = () => {
  return (
    <div className='background-video'>
      <video autoPlay loop muted className='video'>
        <source src='/src/Food1.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default BackgroundVideo
