import React from 'react'
import { Card, Container, Button, Form } from 'react-bootstrap'
import "../../styles/Register.css";
import MyButton from '../button/MyButton';

const Register = () => {
  return (
    <>
      <div className='register-container' >
        <div>
          <h1>Sign Up</h1>
        </div>
        <div className="form-group">
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
        </div>
        <MyButton props="100%">Register</MyButton>
      </div>
    </>
  )
}

export default Register

