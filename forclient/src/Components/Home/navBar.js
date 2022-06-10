import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
function navBar() {
  let userIsConnected = JSON.parse(localStorage.getItem('current_user'))
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div>
        <Navbar bg="black" variant="dark">
    <Container className="navbar">
    <Navbar.Brand className ="navbarLogo">
     SahliImo </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as ={Link} to="/" >Home</Nav.Link>
      <Nav.Link as ={Link} to="/AboutUs">AboutUs</Nav.Link>
      <Nav.Link as ={Link} to ="/Product">Our service</Nav.Link>
      {userIsConnected? <Nav.Link onClick={() => logout()}>Logout</Nav.Link> : <Nav.Link as ={Link} to ="/Login">Login</Nav.Link>}
      
    </Nav>
    </Container>
  </Navbar>
    </div>
  )
}

export default navBar