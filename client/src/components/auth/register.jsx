import React from 'react'
import { Card, Container, Button, Form } from 'react-bootstrap'

const Register = () => {
  return (
    <>
        <Card style={{justifyContent: "center", position:"relative", width: "780px"}}>
          <Card.Header className="p-4 align-items-center justify-content-center">
            <h2 style={{textAlign:"center"}}>Sign Up and Start Managing Your Lab!</h2>
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email:</Form.Label>
                <Form.Control type='email' placeholder='example@example.com' />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder='Password'></Form.Control>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder='Confirm Password'></Form.Control>
              </Form.Group>
            </Form>
            <div style={{}}>

              <Button style={{width: "100%"}}>Submit</Button>
            </div>
          </Card.Body>
        </Card>
      
    </>
  )
}

export default Register