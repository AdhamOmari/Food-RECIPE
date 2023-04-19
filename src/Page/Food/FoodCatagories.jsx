import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCategories } from '../../../Redux/FechData/fetchAction'
import Lodging from '../../Component/lodging/Lodging'
import { Link, useNavigate } from 'react-router-dom'
import SingleRespies from '../SingleRespies/SingleRespies'

const FoodCatagories = () => {
  const dispatch = useDispatch()

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
          <SingleRespies key={`category-${category.id}`} category={category} />
        ))}
      </div>
    </div>
  )
}

export default FoodCatagories
