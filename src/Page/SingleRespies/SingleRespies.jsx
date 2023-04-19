import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'

const SingleRespies = props => {
  const recipe = props

  console.log(recipe)

  return (
    <div>
      <h1>{recipe?.name}</h1>
      <img src={recipe?.category_picture} alt={recipe?.name} />
      <h2>Ingredients</h2>
      <ListGroup>
        {recipe?.ingredients?.map(ingredient => (
          <ListGroup.Item key={ingredient}>{ingredient}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Instructions</h2>
      <Card>
        <Card.Body>{recipe?.instructions}</Card.Body>
      </Card>
    </div>
  )
}

export default SingleRespies
