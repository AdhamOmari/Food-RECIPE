import React from 'react'
import './Recipes.css'

function Recipes () {
  return (
    <div className='about-container'>
      <div className='about-text'>
        <h2>Recipes</h2>
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

export default Recipes
