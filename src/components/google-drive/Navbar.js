import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

import './Navbar.css'

export default function NavbarComponent() {
  const { currentUser } = useAuth()

  return (
    <Navbar bg="light" expand="sm" style={{ justifyContent: 'space-between' }}>
      <Navbar.Brand as={Link} to="/" className='navbar__brand'>
        Backspace
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user" className='navbar__link'>
          {currentUser.email}
        </Nav.Link>
      </Nav>
    </Navbar>
  )
}
