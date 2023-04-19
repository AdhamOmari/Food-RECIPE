import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCategories } from '../../../Redux/FechData/fetchAction'
import Lodging from '../../Component/lodging/Lodging'
import { Link, useNavigate } from 'react-router-dom'

const FoodCatagories = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [delayedRendering, setDelayedRendering] = useState(true)
  const { categories, error, loading } = useSelector(
    state => state.categoryReducer
  )

  useEffect(() => {
    dispatch(fetchCategories())
  }, [])

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setDelayedRendering(false)
      }, 6000)
    }
  }, [loading])

  if (delayedRendering) {
    return <Lodging />
  }

  return (
    <div className='container'>
      <div className='row'>
        {categories.map(category => (
          <div
            key={`category-${category.id}`}
            className='col-md-6 col-lg-4 mb-3'
          >
            <Link
              to={{
                pathname: `/Single/${category.id}`,
                category: category
              }}
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
        ))}
      </div>
    </div>
  )
}

export default FoodCatagories
