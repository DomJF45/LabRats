import React, {useRef, useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';

import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Form, Button } from 'react-bootstrap';
import Dots from '../loading/dots'
import "../../styles/Register.css";
import MyButton from '../button/MyButton';

const Register = () => {

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // })

  // const { name, email, password, confirmPassword } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, loading, success, error, message} = useSelector((state) => state.auth)

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();
  const roleRef = useRef();
  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (success || user) {
      navigate('/')
    }
    dispatch(reset());

  },[user, error, success, message, navigate, dispatch])

  const handleRegister = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPassRef.current.value) {
      toast.error('Make Sure Your Passwords Match.')
    } else {
      const userData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        role: roleRef.current.value
      }

      dispatch(register(userData));
      // console.log({
      //   name: nameRef.current.value,
      //   email: emailRef.current.value,
      //   password: passwordRef.current.value,
      //   confirmPassRef: confirmPassRef.current.value
      // })
    }
  }

  if (loading) {
    return <Dots />
  }

  return (
    <>
      <div className='register-container' >
        <div>
          <h1>Sign Up</h1>
        </div>
        <div className="form-group">
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" >
              <Form.Label>Name:</Form.Label>
              <Form.Control 
                type='text'
                placeholder='Name'
                ref={nameRef}
                className="mb-3" 
              />
              <Form.Label>Email:</Form.Label>
              <Form.Control 
                type='email' placeholder='example@example.com'
                ref={emailRef}
                className="mb-3" 
              />
              <Form.Label>Role</Form.Label>
              <Form.Select ref={roleRef} className="mb-3">
                <option>Principle Investigator</option>
                <option>Graduate Research Assistant</option>
                <option>Undergraduate Research Assistant</option>
              </Form.Select>
              <Form.Label>Password:</Form.Label>
              <Form.Control 
                type="password" 
                placeholder='Password'
                ref={passwordRef}
                className="mb-3" 
              ></Form.Control>
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control 
              type="password" 
              placeholder='Confirm Password'
              ref={confirmPassRef} 
              className="mb-3"
              ></Form.Control>
            </Form.Group>
            <MyButton props={"100%"} onClick={() => this.submit()}>Register</MyButton>
          </Form>
        </div>
        <div style={{padding: "1.5rem 0", display: "flex", justifyContent: "center"}}>
          <div style={{paddingRight: ".5rem"}}>

            <p style={{textAlign: "center"}}>Already have an account? </p>
          </div>
          <NavLink 
            to="/login"
            style={isActive => ({
              color: isActive ? "#FFB703" : "blue",
              textDecoration: "none"
            })}
          
          >Log In</NavLink>
        </div>
      </div>
    </>
  )
}

export default Register

