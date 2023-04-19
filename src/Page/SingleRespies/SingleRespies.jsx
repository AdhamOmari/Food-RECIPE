import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SingleRespies = ({ category }) => {
  console.log(category.id)

  return (
    <div className='col-md-6 col-lg-4 mb-3'>
      <Link
        to={{ pathname: `/detail/${category.id}`, state: { id: category.id } }}
      >
        <div className='card'>
          <img
            src={category.category_picture}
            alt={`${category.name} category`}
            className='card-img-top'
          />
          <div className='card-body'>
            <h2 className='card-title'> {category.name}</h2>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SingleRespies
