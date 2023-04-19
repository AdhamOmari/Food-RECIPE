import React from 'react'
import { animated, useSpring } from 'react-spring'

function NotFound () {
  const props = useSpring({
    from: { opacity: 0, transform: 'translateY(-50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 }
  })

  return (
    <animated.div style={props}>
      <h1>404 Not Found</h1>
    </animated.div>
  )
}

export default NotFound
