import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import { NavDropdown } from 'react-bootstrap'

const Navigation = ({userProps}) => {
  return (
    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Lab Rats</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <NavDropdown title="Settings" id="settings-dropdown">
              <NavDropdown.Item>Setting 1</NavDropdown.Item>
              <NavDropdown.Item>Setting 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#account">Account</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{userProps}</a>
              </Navbar.Text>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  )
}

export default Navigation;
