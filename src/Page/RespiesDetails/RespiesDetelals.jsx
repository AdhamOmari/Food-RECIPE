import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Card, ListGroup, CardGroup, Form, Button } from 'react-bootstrap'
import './RespiesDetails.css'
import { addComment } from '../../../Redux/AddCommant/CommentAction'

const RespiesDetails = () => {
  const { categories } = useSelector(state => state.categoryReducer)
  const { comments } = useSelector(state => state.commentsReducer)
  console.log(comments)
  const { id } = useParams()
  const category = categories.find(cat => cat.id === parseInt(id))
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')

  const handleSubmit = (e, item) => {
    e.preventDefault()
    const comment = 'add'
    dispatch(addComment(category.id, item.id, comment))
  }

  useEffect(() => {
    fetch('http://localhost:8000/categories/2')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
  }, [])
  return (
    <>
      <CardGroup className='card-group'>
        {category.recipes?.map(item => (
          <Card key={item.id} className='card2 my-3'>
            <Card.Img
              variant='top'
              src={item.picture}
              alt={`${item.name} picture`}
            />
            <Card.Body>
              <Card.Title>{item?.name}</Card.Title>
              <Card.Text>{item?.description}</Card.Text>
              <ListGroup className='list-group-flush'>
                <ListGroup.Item>
                  <strong>Ingredients:</strong>
                </ListGroup.Item>
                {item?.ingredients?.map((ingredient, index) => (
                  <ListGroup.Item key={index}>{ingredient}</ListGroup.Item>
                ))}
                {item.comments.length ? (
                  <div className='comments'>
                    <h5>Comments:</h5>
                    {item?.comments?.map((comment, index) => (
                      <p key={index}>{comment}</p>
                    ))}
                  </div>
                ) : (
                  <div className='comments'>
                    <p>No comments yet. Be the first to comment!</p>
                  </div>
                )}
              </ListGroup>
              <hr />
              <Form onSubmit={e => handleSubmit(e, item)} className='Form'>
                <Form.Group>
                  <Form.Label>Add a Comment:</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your comment'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                  />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Add Comment
                </Button>
              </Form>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </>
  )
}

export default RespiesDetails
