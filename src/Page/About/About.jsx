import React from 'react'
import './About.css'

function About () {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <h2>About Us</h2>
        <p>
          We are a team of passionate foodies who love to share our favorite
          recipes with others. Our mission is to make cooking fun and accessible
          for everyone.
        </p>
      </div>
      <div className='coming-soon'>
        <h2>Coming Soon!</h2>
        <div className='loader'></div>
      </div>
    </div>
  )
}

export default About
