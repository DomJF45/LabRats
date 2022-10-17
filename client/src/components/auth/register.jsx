import React, {useRef} from 'react'
import { Form } from 'react-bootstrap'
import "../../styles/Register.css";
import MyButton from '../button/MyButton';

const Register = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const handleRegister = () => {
    console.log({email: emailRef, password: passwordRef})
  }

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
              <Form.Control type='email' placeholder='example@example.com' ref={emailRef} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder='Password' ref={passwordRef}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control type="password" placeholder='Confirm Password' ref={confirmPassRef}></Form.Control>
            </Form.Group>
          </Form>
        </div>
        <MyButton props="100%">Register</MyButton>
      </div>
    </>
  )
}

export default Register

