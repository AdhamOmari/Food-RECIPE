import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './AppNavBar.css'
import About from '../../Page/About/About'

function AppNavBar () {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>
        <Link to='/' className='logo'>
          <span>F</span>
          <span>o</span>
          <span>o</span>
          <span>d</span>
          <span>-</span>
          <span>R</span>
          <span>e</span>
          <span>c</span>
          <span>i</span>
          <span>p</span>
          <span>e</span>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/Recipes'>
            Recipes
          </Nav.Link>
          <Nav.Link as={Link} to='/About'>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNavBar
