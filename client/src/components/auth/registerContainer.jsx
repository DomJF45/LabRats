import React from 'react'
import Container from "react-bootstrap/Container";
import Register from './register';
const RegisterContainer = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <Register />
    </Container>
  )
}

export default RegisterContainer